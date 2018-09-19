const path = require("path")
const fs = require("fs-extra")

const dist = path.resolve(__dirname, "../dist")

fs.emptyDir(dist)