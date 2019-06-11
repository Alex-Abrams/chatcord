const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/chat_cord.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,                //c
        exclude: /(node_modules)/,      //c
        use: {
          loader: 'babel-loader',   //c
          query: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};


////////////////////////
