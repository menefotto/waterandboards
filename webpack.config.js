const webpack = require('webpack');
process.traceDeprecation = true

config = {
  devtool: 'source-map',
  entry: './src/app.js',
  output: {
    filename: 'lib/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?+babelrc,+cacheDirectory'
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.AggressiveMergingPlugin()
  ],
  devServer: {
    contentBase: './src/',
    compress: true,
    port: 9000
  }
}

module.exports = config
