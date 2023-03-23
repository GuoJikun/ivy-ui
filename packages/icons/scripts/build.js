const { spawn } = require('child_process');
const { readdirSync, readFileSync, writeFile } = require('fs');
const { join } = require('path');
const { parseSync, stringify } = require('svgson');
const { transSvg, camelCase } = require('./utils.js');

const entryDir = join(__dirname, '..', 'svgs');

const outputDir = join(__dirname, '..', 'src/components');

const entryFileList = readdirSync(entryDir, 'utf-8');

const outputDirList = readdirSync(outputDir, 'utf-8');

console.log(outputDirList);

const batches = entryFileList
  .filter(f => f.endsWith('.svg'))
  .map(async file => {
    const name = file.replace('.svg', '');
    const filePath = entryDir + '/' + file;
    const svgFile = readFileSync(filePath);

    return {
      _name: name,
      file: await transSvg(svgFile),
    };
  });

const svg2component = svg => {
  return `
    import { Component, Host, h, Prop } from '@stencil/core';
    @Component({
      tag: "ivy-${svg.id}",
      styleUrl: 'ivy-${svg.id}.css',
      shadow: false,
    })
    export class Ivy${camelCase(svg.id)} {
      @Prop({
        attribute: 'size',
        mutable: true,
        reflect: true,
      }) size:string = '14px';

      @Prop({
        attribute: 'color',
        mutable: true,
        reflect: true,
      }) color:string = '#333333';

      render(){
        <Host size={this.size} color="{this.color}">
          ${svg.content}
        </Host>
      }
    }
  `;
};

Promise.all(batches).then(res => {
  const t = res.map(async c => {
    const parseStr = parseSync(c.file);
    const str = stringify(parseStr);
    const target = { content: str, id: c._name };
    const flag = outputDirList.includes(`ivy-target.id`);
    if (flag) {
    } else {
      console.log('没有对应的文件夹');
      await spawn(`pnpm generate ivy-${target.id}`, {
        cwd: join(__dirname, '..'),
        stdio: 'inherit',
        shell: process.platform === 'win32',
      });
    }
    // console.log(flag, svg2component(target));
    return target;
  });
});
