const path = require("path")
const express = require("express")
const app = express()

const root = path.resolve(__dirname, "../dist")

const port = 8080

app.use(express.static(root))
app.listen(port)

/* eslint no-console: 0 */
console.log(`Serving @ localhost:${port}. Ctrl+C to kill`)