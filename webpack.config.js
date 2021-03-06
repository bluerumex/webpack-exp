const path = require('path');

module.exports = {
  entry: {
    entry: ['babel-polyfill',  './src/js/entry.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/js')
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: [
        path.resolve(__dirname, 'src/js')
      ],
      exclude: /node_module/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
          // babel 7: presets: ['@babel/preset-env'] // ["env"]
        }
      }
    }]
  },
  devtool: 'source-map',
  mode: 'development'
};