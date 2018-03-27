const webpack = require('webpack');
const paths = require('./scripts/paths');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
	mode: 'development',

	entry: paths.entry,

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
			template: paths.indexHtml,
			minify: false
		})
	]
};

module.exports = config;