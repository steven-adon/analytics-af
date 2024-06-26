import express from "express"
const server = express()
import path from "path"

const webpack = require("webpack")
const config = require("../../build/webpack.dev.js")
const compiler = webpack(config)

const webpackDevMiddleware = require("webpack-dev-middleware")(
  compiler
)

const webpackHotMiddlware = require("webpack-hot-middleware")(
  compiler
)

server.use(webpackDevMiddleware)
server.use(webpackHotMiddlware)
console.log("Middleware enabled")


const staticMiddleware = express.static("dist")
server.use(staticMiddleware)
const PORT = 8080
server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
