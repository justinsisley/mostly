/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const clientDist = path.join(__dirname, '../../dist/client');
const nodeModules = path.join(__dirname, '../../node_modules');
const clientIndexHtml = path.join(__dirname, '../../src/client/index.html');

const { NODE_ENV } = process.env;
const isPrd = NODE_ENV === 'production';
const styleLoader = isPrd ? MiniCssExtractPlugin.loader : 'style-loader';

module.exports = {
  // Configuration for webpack.output
  output: {
    path: clientDist,
    publicPath: '/',
  },

  // Configuration for webpack.module.rules
  rules: [
    // Load JavaScript
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    },

    // Load global CSS files from node_modules
    {
      test: /\.css$/,
      include: /node_modules/,
      use: [
        styleLoader,
        {
          loader: 'css-loader',
          options: {
            paths: [nodeModules],
          },
        },
      ],
    },

    // Load local CSS modules from src
    {
      test: /\.css$/,
      exclude: /node_modules/,
      use: [
        styleLoader,
        {
          loader: 'css-loader',
          options: {
            modules: true,
          },
        },
      ],
    },

    // Load static assets (images, fonts, etc.)
    {
      test: /\.(gif|png|jpe?g|ttf|eot|svg|woff|woff2)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: 'assets/[hash].[ext]',
        },
      },
    },
  ],

  // Configuration for webpack.plugins
  plugins: {
    htmlWebPackPlugin: new HtmlWebPackPlugin({
      template: clientIndexHtml,
      filename: './index.html',
    }),
  },

  // Configuration for webpack.resolve
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  // Configuration for webpack.stats
  stats: {
    children: false,
    entrypoints: false,
    hash: false,
    modules: false,
    version: false,
  },
};
