const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/chat_cord.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,                //c
        exclude: /(node_modules)/,      //c
        use: {
          loader: 'babel-loader',   //c
          options: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      },
      {
        test: /\.png$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'file-loader',
        }
      },
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};

//loader: 'babel-loader',
//////////////////////// query might need to change to options
// entry: './frontend/chat_cord.jsx',
