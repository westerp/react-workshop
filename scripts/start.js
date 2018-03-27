const chalk = require('chalk');
const paths = require('./paths');
const webpack = require('webpack');
const serve = require('webpack-serve');

// Set up configuration
const {HOST, PORT, HTTPS} = process.env;
const config = require(paths.webpackDev);
config.serve = config.serve || {};
config.serve.https = HTTPS ? 'https' : 'http';
config.serve.host = HOST || '0.0.0.0';
config.serve.port = parseInt(PORT) || 3000;

clearConsole();
serve({config}).then(() => {
  devServer.on('listening', () => {
    console.log(chalk.cyan('Development server ready\n'));
  });
})().catch(err => {
  console.log(err);
  process.exit(1);
});