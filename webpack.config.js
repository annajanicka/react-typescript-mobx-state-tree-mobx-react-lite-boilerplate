var path = require('path');
var webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'eval',
  mode: 'development',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: "awesome-typescript-loader",
      include: path.join(__dirname, 'src')
    }]
  },
  plugins: [
    new CopyPlugin([
      {
        from: path.join(__dirname, 'src/api'),
        to: path.join(__dirname, 'dist/api')
   
       },
    ]),
  ],
  devtool: 'source-map'
};
