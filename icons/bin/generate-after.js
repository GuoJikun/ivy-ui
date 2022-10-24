const { join } = require('path');
const { readdirSync, readFileSync } = require('fs');
const beforeComponent = require('../temp/tmp.js');
const { writeFile, transSvg } = require('../scripts/utils.js');
const { parseSync, stringify } = require('svgson');

const targetDirPath = join(__dirname, '..', 'src/components');
const outputDirList = readdirSync(targetDirPath, 'utf-8');
const target = outputDirList.find(c => !beforeComponent.includes(c));

if (target) {
  const svgSourcePath = join(__dirname, '..', `svgs/${new String(target).replace('uni-', '')}`);
  const svgFileBuffer = readFileSync(`${svgSourcePath}.svg`);
  if (!svgFileBuffer) return;
  transSvg(svgFileBuffer)
    .then(res => {
      const svgFileStrParse = parseSync(res);
      const svgFileStrStringify = stringify(svgFileStrParse);
      writeFile(`${targetDirPath}/${target}`, target, svgFileStrStringify);
    })
    .catch(() => {
      throw new Error('文件写入失败');
    });
}
