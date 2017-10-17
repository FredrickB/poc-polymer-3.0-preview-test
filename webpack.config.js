const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const template = path.join(__dirname, 'src', 'public', 'index.html');

const distFolder = 'public';

module.exports = {
  entry: './src/my-app.js',
  output: {
    path: path.resolve(__dirname, distFolder),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.html$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'html-loader'
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, distFolder),
    compress: true,
    port: 3000
  },
  plugins: [
    new CleanWebpackPlugin([distFolder]),
    new HtmlWebpackPlugin({
      title: 'Development',
      template: template,
      inject: false // Avoid duplicate registration of custom elements. Use template instead
    })
  ]
}
