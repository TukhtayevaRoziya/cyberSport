const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js',
  },
  stats: 'errors-only',
  // resolve: {
  //   extensions: ['.js', '.jsx', '.ts', '.tsx', '.png', '.jpg', 'webp'],
  // },
  resolve: {
    extensions: ['', '.js', '.jsx', '.ts', '.tsx']
},
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
        test: /\.(jpe?g|png|gif|woff|woff2|otf|eot|ttf|svg|webp)(\?[a-z0-9=.]+)?$/,
        use: [
            {
                loader: 'url-loader',
                options: {
                    limit: 1000,
                    name : 'assets/img/[name].[ext]'
                }
            }
        ]
    }
    ],
  },
}
