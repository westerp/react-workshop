const webpack = require("webpack")
const base = require("./webpack.config")

const config = {
	...base,

	mode: "development",
	devtool: "source-map",

	devServer: {
		port: 8088,
		historyApiFallback: true,
		https: false,
		hot: true,
		overlay: true,
		stats: base.stats
	},

	module: {
		rules: [
			...base.module.rules,
			{
				test: /\.global\.(css|scss|sass)$/,
				exclude: /node_modules/,
				use: [{
					loader: "style-loader"
				}, {
					loader: "css-loader",
				}, {
					loader: "postcss-loader"
				}, {
					loader: "sass-loader"
				}]
			}, {
				test: /\.(css|scss|sass)$/,
				exclude: /(node_modules|\.global\.(css|scss|sass))/,
				use: [{
					loader: "style-loader"
				}, {
					loader: "css-loader",
					options: {
						modules: true,
						localIdentName: "[name]-[local]--[hash:base64:5]",
						importLoaders: 2
					}
				}, {
					loader: "postcss-loader"
				}, {
					loader: "sass-loader"
				}]
			}]
	},

	plugins: [
		...base.plugins,
		new webpack.HotModuleReplacementPlugin()
	]
}

module.exports = config