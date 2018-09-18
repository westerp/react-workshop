const base = require("./webpack.config")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
	...base,
	mode: "production",

	module: {
		rules: [
			...base.module.rules,
			{
				test: /\.global\.(css|scss|sass)$/,
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract([{
					loader: "css-loader",
				}, {
					loader: "postcss-loader"
				}, {
					loader: "sass-loader"
				}])
			}, {
				test: /\.(css|scss|sass)$/,
				exclude: /(node_modules|\.global\.(css|scss|sass))/,
				use: ExtractTextPlugin.extract([{
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
				}])
			}]
	},

	plugins: [
		...base.plugins,

		new ExtractTextPlugin({
			filename: "styles/styles.[hash:10].css",
			allChunks: true
		})
	]
}