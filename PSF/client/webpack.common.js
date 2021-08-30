const HTMLWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        use: {
          loader: "babel-loader"
        }
      }, {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'less-loader', // compiles Less to CSS
          },
        ],
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
      title: 'Production',
    })
  ],

  output:{
    filename: '[name].bulde.js',
    path: path.resolve(__dirname, 'dist'),
  },

}
