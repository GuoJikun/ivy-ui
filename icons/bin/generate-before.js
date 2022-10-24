const { join } = require('path');
const { readdirSync, writeFileSync } = require('fs');

const targetDirPath = join(__dirname, '..', 'src/components');
const outputDirList = readdirSync(targetDirPath, 'utf-8');
writeFileSync(join(__dirname, '..', './temp/tmp.js'), `module.exports = ${JSON.stringify(outputDirList)}`);
