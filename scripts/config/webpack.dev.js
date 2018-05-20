/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const shared = require('./webpack.shared');

const config = {
  output: shared.output,
  module: {
    rules: shared.rules,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    shared.plugins.htmlWebPackPlugin,
  ],
  devServer: {
    hotOnly: true,
    inline: true,
    port: 3320,
    proxy: {
      '/api': 'http://localhost:3325',
    },
    stats: shared.stats,
  },
  resolve: shared.resolve,
  devtool: 'cheap-module-eval-source-map',
};

module.exports = config;
