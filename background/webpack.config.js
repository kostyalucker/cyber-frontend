const path = require('path');

module.exports = {

  entry: [
    './background/src/index.js'
  ],

  output: {
    filename: 'background.js',
    path: path.join(__dirname, '../', 'build')
  },

  resolve: {
    extensions: ['.js', '.json'],
    modules: ['node_modules']
  },

  module: {
    rules: [
      {
        test: /\.(js)?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        include: path.join(__dirname, 'src')
      }
    ]
  }
};
