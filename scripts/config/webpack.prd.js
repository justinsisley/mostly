/* eslint-disable import/no-extraneous-dependencies */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssnanoPlugin = require('@intervolga/optimize-cssnano-plugin');
const shared = require('./webpack.shared');

const config = {
  output: shared.output,
  module: {
    rules: shared.rules,
  },
  plugins: [
    shared.plugins.htmlWebPackPlugin,
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new OptimizeCssnanoPlugin({
      cssnanoOptions: {
        preset: [
          'default',
          {
            discardComments: {
              removeAll: true,
            },
          },
        ],
      },
    }),
  ],
  resolve: shared.resolve,
  stats: shared.stats,
};

module.exports = config;
