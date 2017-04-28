const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')


config = {
  devtool: 'source-map',
  entry: './src/app.js',
  output: {
    path: __dirname + '/lib',
    filename: '[name]-bundle.js',
    chunkFilename: '[name].chunk.js'
  },
  resolve: {
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat',
      'react-tap-event-plugin': 'preact-tap-event-plugin',
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?+babelrc,+cacheDirectory'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ 
          fallback: "style-loader",
          use: "css-loader"
        }),
      },
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      minChunks: 3,
      children: true,
      async: true,
    }),
    new ExtractTextPlugin('bundle.css'),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './src/',
    compress: true,
    port: 8080
  }
}

module.exports = config
