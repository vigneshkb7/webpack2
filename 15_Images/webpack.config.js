module.exports = {
  entry: "./main.js",
  output: {
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.jpg$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=10000'
      }
    ]
  }
}
