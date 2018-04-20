const webpack = require('webpack');
const baseConfig = require('./webpack.config');

const config = {
	...baseConfig,

	mode: 'development',
	devtool: 'source-map',

	devServer: {
		port: 1337,
		https: true,
		hot: true,
		historyApiFallback: true,
		overlay: true
	},

	module: {
		rules: [
			...baseConfig.module.rules,
			{
				test: /\.(scss|sass|css)$/,
				exclude: /(node_modules|\.global\.(scss|sass|css))/,
				use: [{
					loader: 'style-loader'
				}, {
					loader: 'css-loader',
					options: {
						modules: true,
						localIdentName: '[name]-[local]--[hash:base64:5]',
						importLoaders: 1
					}
				}, {
					loader: 'sass-loader'
				}]
			},
			{
				test: /\.global\.(scss|sass|css)$/,
				exclude: /node_modules/,
				use: [{
					loader: 'style-loader'
				}, {
					loader: 'css-loader'
				}, {
					loader: 'sass-loader'
				}]
			}
		]
	},

	plugins: [
		...baseConfig.plugins,
		new webpack.HotModuleReplacementPlugin()
	]
};

module.exports = config;