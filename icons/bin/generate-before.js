const { join } = require('path');
const { readdirSync, writeFileSync, readFileSync } = require('fs');
const { spawn } = require('child_process');
const { writeFile, transSvg } = require('../scripts/utils.js');
const { parseSync, stringify } = require('svgson');

const argv = process.argv;
const compName = argv.at(2);

const svgSourceDir = join(__dirname, '..', 'svgs');
const outputSvgList = readdirSync(svgSourceDir, 'utf-8');

const targetDirPath = join(__dirname, '..', 'src/components');
const outputDirList = readdirSync(targetDirPath, 'utf-8');

if (compName === undefined || compName === null) {
  console.error('\x1B[31m%s\x1B[0m', '请输入组件名称');
  process.exit();
} else if (!compName.startsWith('ivy-')) {
  console.error('\x1B[31m%s\x1B[0m', '组件名称必须以uni-开头');
  process.exit();
} else if (!outputSvgList.map(c => c.replace('.svg', '')).some(v => compName.endsWith(v))) {
  console.error('\x1B[31m%s\x1B[0m', '对应的svg文件不存在');
  process.exit();
} else if (outputDirList.includes(compName)) {
  console.error('\x1B[31m%s\x1B[0m', '对应的组件已经存在');
  process.exit();
} else {
  writeFileSync(join(__dirname, '..', './temp/tmp.js'), `module.exports = ${JSON.stringify(outputDirList)}`);

  const spawnMap = spawn(`stencil generate ${compName}`, {
    cwd: join(__dirname, '..'),
    stdio: 'inherit',
    shell: process.platform === 'win32',
  });
  spawnMap.on('exit', () => {
    const target = outputDirList.find(c => !outputDirList.includes(c));

    if (!target) {
      const svgSourcePath = join(__dirname, '..', `svgs/${new String(compName).replace('ivy-', '')}`);
      const svgFileBuffer = readFileSync(`${svgSourcePath}.svg`);
      if (!svgFileBuffer) return;
      transSvg(svgFileBuffer)
        .then(res => {
          const svgFileStrParse = parseSync(res);
          const svgFileStrStringify = stringify(svgFileStrParse);
          writeFile(`${targetDirPath}/${compName}`, compName, svgFileStrStringify);
        })
        .catch(() => {
          throw new Error('文件写入失败');
        });
    }
  });
}
