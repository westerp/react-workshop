const webpack = require("webpack")
const baseConfig = require("./webpack.config")

module.exports = {
	...baseConfig,
	mode: "development",
	devtool: "source-map",

	devServer: {
		port: 1337,
		historyApiFallback: true,
		https: true,
		hot: true,
		overlay: true,
		stats: baseConfig.stats
	},

	module: {
		rules: [
			...baseConfig.module.rules,
			{
				test: /\.(css|scss|sass)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader",
						options: {
							modules: true,
							localIdentName: "[name]-[local]-[hash:base64:5]",
							importLoaders: 1
						}
					},
					{
						loader: "sass-loader"
					}
				]
			}
		]
	},

	plugins: [
		...baseConfig.plugins,
		new webpack.HotModuleReplacementPlugin()
	]
}