const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const basePath = path.resolve(__dirname, '../');
const srcPath = path.resolve(basePath, './src');

const config = {
  entry: [
    'babel-polyfill',
    path.resolve(srcPath, './index.js')
  ],

  output: {
    path: path.resolve(basePath, './dist'),
    filename: 'src/[name]-[hash].js'
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /node_modules/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(srcPath, './index.html'),
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
};

module.exports = config;