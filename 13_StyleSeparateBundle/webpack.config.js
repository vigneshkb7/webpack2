var ExtractTextPackPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: "./main.js",
  output: {
    filename: "bundle.js"
  },
  module : {
    loaders: [
      {
        test: [/\.css$/],
        exclude: /node_modules/,
        loader: ExtractTextPackPlugin.extract("style-loader", "css-loader")
      }
    ]
  },
  plugins: [
    new ExtractTextPackPlugin("styles.css")
  ]
}
