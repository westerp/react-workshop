const baseConfig = require("./webpack.config")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
	...baseConfig,
	mode: "production",

	module: {
		rules: [
			...baseConfig.module.rules,
			{
				test: /\.(css|scss|sass)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: "css-loader",
						options: {
							modules: true,
							localIdentName: "[hash:base64:5]",
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
		new MiniCssExtractPlugin({
			filename: "styles/styles-[hash].css"
		})
	]
}