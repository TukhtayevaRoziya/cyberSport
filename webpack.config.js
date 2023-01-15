const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.[contenthash].js",
    clean: true,
  },
  devtool: "source-map",
  // resolve: {
  //   extensions: ['.js', '.jsx', '.ts', '.tsx', '.png', '.jpg', 'webp'],
  // },
  resolve: {
    extensions: ['', '.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
      },
      //   {
      //     test: /\.(jpe?g|png|gif|woff|woff2|otf|eot|ttf|svg|webp)(\?[a-z0-9=.]+)?$/,
      //     use: [
      //         {
      //             loader: 'url-loader',
      //             options: {
      //                 limit: 1000,
      //                 name : 'assets/img/[name].[ext]'
      //             }
      //         }
      //     ]
      // }
    ],
  },
}
