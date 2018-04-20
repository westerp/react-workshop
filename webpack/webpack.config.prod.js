const baseConfig = require('./webpack.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  ...baseConfig,

  mode: 'production',

  module: {
		rules: [
			...baseConfig.module.rules,
			{
				test: /\.(scss|sass|css)$/,
				exclude: /(node_modules|\.global\.(scss|sass|css))/,
				use: ExtractTextPlugin.extract([{
					loader: 'css-loader',
					options: {
						modules: true,
						localIdentName: '[name]-[local]--[hash:base64:5]',
						importLoaders: 1
					}
				}, {
					loader: 'sass-loader',
          options: {
            outputStyle: 'compressed'
          }
				}])
			},
			{
				test: /\.global\.(scss|sass|css)$/,
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract([{
					loader: 'css-loader'
				}, {
          loader: 'sass-loader',
          options: {
            outputStyle: 'compressed'
          }
				}])
			}
		]
  },
  
  plugins: [
    ...baseConfig.plugins,
    new ExtractTextPlugin({
      filename: 'styles/styles.[hash:10].css',
      allChunks: true
    })
  ]
};

module.exports = config;