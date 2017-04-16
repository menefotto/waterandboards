const webpack = require('webpack');
// does it build?
config = {
  entry: './src/app.js',
  output: {
    filename: 'bin/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react','react-hmre']
        }
      }
    ]
  },
  devServer: {
    contentBase: './src/',
    compress: true,
    port: 9000
  }
}

module.exports = config
