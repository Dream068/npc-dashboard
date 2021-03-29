const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const title = 'NPC';
const template = 'src/templates/index.html';
module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    publicPath: '/',
  },
  devServer: {
    contentBase: './dist',
    open: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }, {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
          },
        }],
      }, {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: './assets/[name].[ext]',
          },
        }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title,
      template,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        APP_ENV: JSON.stringify(process.env.APP_ENV),
        UAT: JSON.stringify(process.env.UAT),
      },
      __APP_ENV__: JSON.stringify(process.env.APP_ENV),
    }),
  ],
};
