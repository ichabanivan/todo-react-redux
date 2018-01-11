const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV || 'development';

const common = merge([
  {
    entry: {
      app: [
        'react-hot-loader/patch',
        path.resolve(__dirname, './src/index.js')
      ]
    },
    output: {
      path: path.resolve(__dirname, './build'),
      filename: '[name].js'
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            'babel-loader'
          ],
        },
        {
          test: /\.(css|sass|scss)/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              'css-loader',
              'sass-loader',
              'postcss-loader'
            ]
          })
        },
        {
          test: /\.(gif|png|jpg|jpeg|svg)$/,
          exclude: /node_modules/,
          include: path.resolve(__dirname, './src/assets/img/'),
          use: 'file-loader?name=img/[name].[ext]'
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          include: path.resolve(__dirname, './src/assets/fonts/'),
          loader: 'file-loader?name=fonts/[name].[ext]'
        },
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
      }),
      new ExtractTextPlugin({ // define where to save the file
        filename: './css/[name].css',
        allChunks: true,
      }),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, './src/assets/index.html'),
        // chunks: ['index', 'common'],
        filename: 'index.html',
        path:  path.resolve(__dirname, './build')
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'common'
      }),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
      contentBase: path.resolve(__dirname, './build'),
      port: 8080,
      historyApiFallback: true,
      inline: true,
      hot: true,
      host: '0.0.0.0'
    }
  }
]);

module.exports = function(env) {
  console.log('env is:', env);
  return merge([
    common
  ])
};
