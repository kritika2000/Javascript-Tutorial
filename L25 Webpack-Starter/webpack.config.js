const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3000,
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Webpack App',
      filename: 'index.html',
      template: './src/index.html',
    }),
  ],
};
