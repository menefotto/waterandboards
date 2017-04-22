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
        loader: 'css-loader?name=assents/[name].[hash].css',
      },
      {
        test: /\.(png|jpe?g|gif|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
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
