const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: "./newSheet.js",
  mode: "development",
  output: {
    filename: "NewSheet.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "index.html",
    }),
    new MiniCssExtractPlugin({
        filename: '[name].css'
      })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test:/\.(svg|png)$/i,
        type:'asset/resource',
        generator: {
          filename: 'assets/imgs/[name].[contenthash].[ext]'
        }
      },
      
    ],
  },
  devServer: {
      open:true
  }
};
