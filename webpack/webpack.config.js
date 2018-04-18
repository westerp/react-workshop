const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const base = path.resolve(__dirname, '../');
const srcPath = leaf => {
	return path.resolve(base, './src', leaf);
}

const config = {
	entry: [
		'babel-polyfill',
		srcPath('./index.js'),
	],

	output: {
		path: path.resolve(base, './dist'),
		filename: 'src/[name]-[hash].js',
    publicPath: '/'
	},
	
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: 'babel-loader'
		}]
	},

	plugins: [
		new HtmlWebpackPlugin({
			inject: 'body',
			hash: true,
			template: srcPath('./index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
		})
	],
	
	stats: {
		assets: true,
		children: false,
		chunks: false,
		hash: false,
		modules: false,
		publicPath: true,
		timings: false,
		version: false,
		warnings: true
	}
};

module.exports = config;