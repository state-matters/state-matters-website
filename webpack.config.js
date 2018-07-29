const path = require("path")
const externals = require("webpack-node-externals")

const moduleRules = {
  rules: [
    {
      test: /\.(jsx?)$/,
      loader: "babel-loader",
      exclude: [/node_modules/]
    }
  ]
}

const resolve = {
  alias: {
    theme$: path.resolve(__dirname, "client/theme.js"),
    ducks: path.resolve(__dirname, "client/ducks/"),
    components: path.resolve(__dirname, "client/components/")
  }
}

const server = {
  entry: "./server.js",
  target: "node",
  externals: externals(),
  output: {
    filename: "./server.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  module: moduleRules,
  resolve
}

const client = {
  entry: "./client/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
    publicPath: "/"
  },
  module: moduleRules,
  resolve
}

module.exports = [server, client]
