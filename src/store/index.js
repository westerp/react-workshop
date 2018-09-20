let env = process.env.NODE_ENV
if (!env || env.trim() === ""){
	env = "prod"
}

module.exports = require("./createStore."+env)