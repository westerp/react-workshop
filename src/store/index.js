// Dynamic imports aren't supported by ES6 so we have to use require(...)

let env = process.env.NODE_ENV;
if (!env || env.trim() === ''){
  env = 'prod';
}

module.exports = require('./createStore.'+env);