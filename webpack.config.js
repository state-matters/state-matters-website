const path = require("path")
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    compress: true,
    port: 3000,
    historyApiFallback: true,
    proxy: {
      "/api": "http://localhost:8080"
    }
  },
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "state_matters.bundle.js",
    publicPath: "/"
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
  ],
  resolve: {
    alias: {
      theme$: path.resolve(__dirname, "client/theme.js"),
      ducks: path.resolve(__dirname, "client/ducks/"),
      components: path.resolve(__dirname, "client/components/")
    }
  }
}
