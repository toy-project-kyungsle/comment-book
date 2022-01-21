// This file is for developing!! (Just Memo file)

devServer: {
  historyApiFallback: true,
  port: 3080,
  devMiddleware: { publicPath: '/dist/' },
  static: { directory: path.resolve(__dirname) },
},
