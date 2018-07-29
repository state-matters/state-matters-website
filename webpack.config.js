const path = require("path")
const nodeExternals = require("webpack-node-externals")

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

const externals = {
  react: "React",
  "react-dom": "ReactDOM"
}

const server = {
  entry: "./server.js",
  target: "node",
  externals: nodeExternals(),
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
  resolve,
  externals
}

module.exports = [server, client]
