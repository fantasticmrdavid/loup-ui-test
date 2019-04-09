const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${APP_DIR}/index.html`,
  filename: 'index.html',
});

module.exports = {
  entry: `${APP_DIR}/index.jsx`,
  mode: 'development',
  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: 'assets/bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [APP_DIR, 'node_modules'],
    alias: {
      Constants: `${APP_DIR}/constants`,
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ['url-loader', 'file-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    contentBase: BUILD_DIR,
  },
  plugins: [
    HtmlWebpackPluginConfig,
  ],
};
