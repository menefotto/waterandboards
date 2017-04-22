const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')


config = {
  devtool: 'source-map',
  entry: './src/app.js',
  output: {
    path: __dirname + '/lib',
    filename: '[name]-bundle.js',
    chunkFilename: '[name]-[hash].chunk.js'
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
    new webpack.optimize.AggressiveMergingPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      //name: "commons",
      // (the commons chunk name)
      // filename: "commons.js",
      // // (the filename of the commons chunk)
      // // minChunks: 3,
      // // (Modules must be shared between 3 entries)
      // // chunks: ["pageA", "pageB"],
      // // (Only use these entries)
      children: true,
      async: true,
   }),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './src/',
    compress: true,
    port: 9000
  }
}

module.exports = config
