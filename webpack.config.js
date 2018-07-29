const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: "./src/js-algorithms-xerocross.js",
  output: {
    path: path.resolve(__dirname, "./"),
    filename: "js-algorithms-xerocross.js",
    library: "xA",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  optimization: {
    minimize: false
  }
}
