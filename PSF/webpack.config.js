const HTMLWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        use: {
          loader:"babel-loader"
        }
      }, {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader', //tworzenie styli nodes from JS string
          },
          {
            loader: 'css-loader', // tlumaczenie CSS do CommonJS
          },
          {
            loader: 'less-loader', // compilacja less do CSS
          },
        ],
      },

    ]
  },
    plugins:[
      new HTMLWebPackPlugin({
        template: './src/index.html',
        filename: './index.html'
      })
    ]
  }
