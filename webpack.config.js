var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'webpack/hot/only-dev-server',
    './server/hello.jsx'
  ],
  output: {
    path: path.join(__dirname, '/server/templates/assets'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './client/src'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};