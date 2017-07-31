const path = require('path');

const config = {
  entry: path.resolve(__dirname, 'src', 'counter.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
         use: [
           { loader: 'style-loader' },
           {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
         ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets:['react']
          }
        }
    }
    ]
  }
};

module.exports = config
