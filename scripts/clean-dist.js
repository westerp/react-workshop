const path = require('path');
const fs = require('fs-extra');

const basePath = path.resolve(__dirname, '../');
const distPath = path.resolve(basePath, './dist');

fs.emptyDir(distPath);