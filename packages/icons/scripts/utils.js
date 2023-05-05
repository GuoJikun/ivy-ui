const { optimize } = require('svgo');
const svgoPluginConf = require('./svgo-plugin-config.mjs');
const { writeFileSync } = require('fs');

const format = svgFile =>
  optimize(svgFile, {
    plugins: svgoPluginConf,
  });
/**
 * 使用 svgo 的 optimize 方法格式化svg 字符串
 * @param {*} svgFile
 * @returns
 */
const transSvg = svgFile => {
  return new Promise((resolve, reject) => {
    try {
      resolve(format(svgFile).data);
    } catch (e) {
      reject(e);
    }
  });
};

const camelCase = str => {
  const arr = str.split('-');
  return arr
    .map(c => {
      const firstChar = c.split('').shift();
      return c.replace(/^([a-zA-Z])(.+)/, `${firstChar.toUpperCase()}$2`);
    })
    .join('');
};

const svg2component = (name, data) => {
  return `import { Component, Host, h, Prop } from '@stencil/core';
@Component({
  tag: "${name}",
  styleUrl: '${name}.css',
  shadow: true,
})
export class ${camelCase(name)} {
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
    return (
      <Host size={this.size} color={this.color}>
        ${data}
      </Host>
    )
  }
}`;
};

const writeTsxFile = (path, content) => {
  writeFileSync(path, content);
};

const writeCssFile = (path, content) => {
  writeFileSync(path, content);
};

const writeFile = (path, name, svgContent) => {
  try {
    const cssContent = `:host {
  display: inline-block;
  font-size: var(--ivy-icon-size, 20px);
  width: 1em;
  height: 1em;
  line-height: 1em;
  transform: rotateZ(0);
}
:host([spin]) {
  animation-name: spin;
  animation-duration: 1.3s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
@keyframes spin {
  from {
    transform: rotateZ(0);
  }
  to {
    transform: rotateZ(360deg);
  }
}`;
    const tmpPath = `${path}/${name}`;
    writeCssFile(`${tmpPath}.css`, cssContent);

    const tsxContent = svg2component(name, svgContent);
    writeTsxFile(`${tmpPath}.tsx`, tsxContent);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  transSvg,
  camelCase,
  writeFile,
};
