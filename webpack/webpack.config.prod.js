const baseConfig = require("./webpack.config")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
	...baseConfig,
	mode: "production",

	module: {
		rules: [
			{
				test: /\.(css|scss|sass)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: "css-loader"
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