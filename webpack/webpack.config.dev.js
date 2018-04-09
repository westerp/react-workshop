const webpack = require('webpack');
const base = require('./webpack.config');

const config = {
	...base,

	mode: 'development',
	devtool: 'source-map',

	devServer: {
		port: 1337,
		historyApiFallback: true,
		hot: true,
		overlay: true,
		stats: base.stats
	},

	plugins: [
		...base.plugins,
		new webpack.HotModuleReplacementPlugin()
	]
};

module.exports = config;