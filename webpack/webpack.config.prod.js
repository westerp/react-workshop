const webpack = require("webpack")
const base = require("./webpack.config")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
	...base,
	mode: "production",

	module: {
		rules: [
			...base.module.rules,
			{
				test: /\.global\.(css|scss|sass)$/,
				exclude: /node_modules/,
				use: [{
					loader: MiniCssExtractPlugin.loader
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
					loader: MiniCssExtractPlugin.loader
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

		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify("production")
		}),
		new MiniCssExtractPlugin({
			filename: "styles/styles.[hash:10].css"
		})
	]
}