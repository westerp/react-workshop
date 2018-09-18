const path = require("path")
const fs = require("fs-extra")

const base = path.resolve(__dirname, "../")
const dist = path.resolve(base, "./dist")

fs.emptyDir(dist)