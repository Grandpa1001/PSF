const HTMLWebPackPlugin = require("html-webpack-plugin");
const path = require('path');


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
    new HTMLWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
      title: 'Production',
    })
  ],
  devServer:{
    hot: true,
    contentBase: './',
    historyApiFallback: true
  },

}
