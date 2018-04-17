const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let configJson = {};
try {
	configJson = require('./config.json');
} catch (err) {}

const base = path.resolve(__dirname, '../');
const srcPath = leaf => {
	return path.resolve(base, './src', leaf);
}

const config = {
	entry: srcPath('./index.js'),

	output: {
		path: path.resolve(base, './dist'),
		filename: 'src/[name]-[hash].js',
    publicPath: '/'
	},
	
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: 'babel-loader'
		}, {
			test: /\.global\.(css|scss|sass)$/,
			exclude: /node_modules/,
			use: [{
				loader: 'style-loader'
			}, {
				loader: 'css-loader',
			}, {
				loader: 'postcss-loader'
			}, {
				loader: 'sass-loader'
			}]
		}, {
			test: /\.(css|scss|sass)$/,
			exclude: /(node_modules|\.global\.(css|scss|sass))/,
			use: [{
				loader: 'style-loader'
			}, {
				loader: 'css-loader',
				options: {
					modules: true,
					localIdentName: '[name]-[local]--[hash:base64:5]',
					importLoaders: 2
				}
			}, {
				loader: 'postcss-loader'
			}, {
				loader: 'sass-loader'
			}]
		}]
	},

	plugins: [
		new HtmlWebpackPlugin({
			inject: 'body',
			hash: true,
			template: srcPath('./index.html'),
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
		}),

		new webpack.DefinePlugin({
			APOD_API_KEY: JSON.stringify(configJson.apodKey)
		})
	],
	
	stats: {
		assets: true,
		children: false,
		chunks: false,
		hash: false,
		modules: false,
		publicPath: true,
		timings: false,
		version: false,
		warnings: true
	}
};

module.exports = config;