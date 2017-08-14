module.exports = {
  entry: "./main.js",
  output: {
    filename: "bundle.js"
  },
  module : {
    loaders: [
      {
        test: [/\.less$/],
        exclude: /node_modules/,
        loader: "style-loader!css-loader!less-loader"
      }
    ]
  }
}
