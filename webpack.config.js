const webpack = require('webpack');
// does it build?
config = {
  devtool: 'source-map',
  entry: './src/app.js',
  output: {
    filename: 'bin/bundle.js'
  },
  resolve: {
    alias: {
     'react': 'preact-compat',
      'react-dom': 'preact-compat',
      'react-redux': 'preact-redux',
      'react-tap-event-plugin': 'preact-tap-event-plugin'
    },
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.AggressiveMergingPlugin()
  ],
  devServer: {
    contentBase: './src/',
    compress: true,
    port: 9000
  }
}

module.exports = config
