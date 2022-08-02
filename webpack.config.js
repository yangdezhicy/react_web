const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: './src/index.js',
	mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      titel: 'react app',
      filename: 'index.html',
      template: path.resolve(__dirname, 'index.html'),
    })
  ],
	devServer: {
		open: true,
		hot: true,
		port: 8080,
		static: './docs',
		historyApiFallback: true
	}
};