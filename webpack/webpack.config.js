const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const entry = path.resolve(__dirname, "../src/index.js")
const indexPath = path.resolve(__dirname, "../src/index.html")
const outputFolder = path.resolve(__dirname, "../dist")

const config = {
	entry,

	output: {
		path: outputFolder,
		publicPath: "/",
		filename: "src/[name]-[hash].js"
	},

	plugins: [
		new HtmlWebpackPlugin({
			inject: "body",
			template: indexPath,
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true
			}
		})
	]
}

module.exports = config