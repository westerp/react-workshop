const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const base = path.resolve(__dirname, '../');
const srcPath = leaf => {
	return path.resolve(base, './src', leaf);
}

const config = {
	entry: srcPath('./index.mjs'),

	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.mjs']
	},
	
	module: {
		rules: [{
			test: /\.(js|jsx|mjs)$/,
			exclude: /node_modules/,
			use: 'babel-loader'
		}]
	},

	plugins: [
		new HtmlWebpackPlugin({
			inject: 'body',
			hash: true,
			template: srcPath('./index.html'),
			minify: false
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