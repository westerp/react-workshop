const path = require("path")
const express = require("express")
const app = express()

const root = path.resolve(__dirname, "../dist")

app.use(express.static(root))
app.listen(8080)