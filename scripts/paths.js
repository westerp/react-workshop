const path = require('path');

const base = path.resolve(__dirname, '../');
const src = path.resolve(base, '/src');
const webpack = path.resolve(base, '/webpack');
const entry = path.resolve(src, 'index.js');

module.exports = {
	base,
	src,
	webpack,
	entry
};