/**
 * This file contains path constants that are reused by other scripts and
 * utilities.
 */

const path = require('path');

const base = path.resolve(__dirname, '../');
const src = path.resolve(base, 'src');
const public = path.resolve(base, 'public');

const entry = path.resolve(src, 'index.mjs');
const indexHtml = path.resolve(src, 'index.html');
const packageJson = path.resolve(base, 'package.json');

const webpackDev = path.resolve(base, 'webpack.config.dev.js');

module.exports = {
	base,
	src,
	indexHtml,
	public,
	
	entry,
	packageJson,

	webpackDev
};