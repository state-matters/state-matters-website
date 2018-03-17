const path = require("path")
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    compress: true,
    port: 3000,
    proxy: {
      "/api": "http://localhost:8080"
    }
  },
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "state_matters.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./client/index.html",
      filename: path.join(__dirname, "public/index.html")
    })
  ]
}
