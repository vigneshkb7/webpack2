var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.resolve('src'),
  entry: {
    adminbundle: './admin_page.js',
    userbundle: './user_page.js'
  },
  output: {
    path: path.resolve('build/'),
    publicPath: '/public/assets/',
    filename: "[name].js"
  },
  devServer: {
    contentBase: 'public'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('commonbundle.js')
  ]
}
