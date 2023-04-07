import { readFileSync, readdir, writeFile } from 'node:fs';
import { optimize } from 'svgo';
import svgoPluginConf from './svgo-plugin-config.mjs';
import { join } from 'node:path';
import { URL, fileURLToPath } from 'node:url';

const format = svgFile =>
  optimize(svgFile, {
    plugins: svgoPluginConf,
  });
/**
 * 使用 svgo 的 optimize 方法格式化svg 字符串
 * @param {*} svgFile
 * @returns
 */
const transferSvg = svgFile => {
  return new Promise((resolve, reject) => {
    try {
      resolve(format(svgFile).data);
    } catch (e) {
      reject(e);
    }
  });
};

// 异步获取目录下的所有svg文件列表
const getSvgFiles = dir => {
  return new Promise((resolve, reject) => {
    readdir(dir, 'utf-8', (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
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

const renderCode = (name, ctx) => {
  const className = camelCase(name);
  return `class ${className} extends HTMLElement {
        constructor() {
          super();
          const host = this.attachShadow({ mode: 'open' });
          const style = \`<style>:host{ display: inline-block; width: 1em;height: 1em;color: currentColor;font-size: inherit; }</style>\`;
          const html = \`${ctx}\`;

          const template = document.createElement('template');
          template.innerHTML = style + html;
          host.appendChild(template.content.cloneNode(true));
        }

        static get observedAttributes() {
          return ['size', 'color'];
        }

        get size() {
          return this.getAttribute('size');
        }

        set size(val) {
          this.setAttribute('size', val);
        }

        get color() {
          return this.getAttribute('color');
        }

        set color(val) {
          this.setAttribute('color', val);
        }

        attributeChangedCallback(attr, oldVal, newVal) {
          if (oldVal === newVal) return;

          switch (attr) {
            case 'size':
              this.size = newVal;
              break;
            case 'color':
              this.color = newVal;
              break;
          }
        }
      }
      export default ${className};
      function install(){
        if(window.customElements.get('${name}')) return;
        window.customElements.define('${name}', ${className});
      }
      export { install as registerComponent }`;
};

const renderCompFile = (entry, outDir) => {
  getSvgFiles(entry)
    .then(res => {
      return res.map(async c => {
        const svgFileContent = readFileSync(`${entry}/${c}`, 'utf-8');
        const svg = await transferSvg(svgFileContent);
        return {
          name: c.replace('.svg', ''),
          content: svg,
        };
      });
    })
    .then(async res => {
      let names = [];
      await Promise.allSettled(res).then(arr => {
        names = arr.map(c => {
          const template = renderCode(`ivy-icon-${c.value.name}`, c.value.content);
          writeFile(`${outDir}/components/${c.value.name}.js`, template, err => {
            if (err) {
              throw err;
            }
          });
          return {
            name: c.value.name,
            className: camelCase(c.value.name),
            compName: `ivy-icon-${c.value.name}`,
          };
        });
      });

      console.log(names);
      return names;
    })
    .then(res => {
      const importStr = res.map(c => `import ${c.className} from './components/${c.name}.js';`).join('\n');
      const compNameList = [...res.map(c => ({ compName: c.compName, className: c.className }))];
      const install = `
      const components = ${JSON.stringify(compNameList)};
      export {${compNameList.map(c => c.className).join(',')}}
      export const registerComponent = () => {
        if(__IVY__iCON__iNSTALLED__) return;
        components.forEach(c => {window.customElements.default.define(c.compName, c.className);});

      }`;

      const indexFileContent = `${importStr}\n${install}`;
      writeFile(`${outDir}/index.js`, indexFileContent, err => {
        if (err) {
          throw err;
        }
      });
    });
};
console.log(import.meta.url);
const __dirname = new URL('..', import.meta.url);
const root = fileURLToPath(__dirname);
console.log(__dirname, fileURLToPath(__dirname));

const entryDir = join(root, 'svgs');
const outputDir = join(root, 'src');

renderCompFile(entryDir, outputDir);
