var path = require('path');

module.exports = {
  context: path.resolve('src'),
  entry: ["./main"],
  output: {
    path: path.resolve('build/'),
    publicPath: '/public/assets/',
    filename: "bundle.js"
  },
  devServer: {
    contentBase: 'public'
  }
}
