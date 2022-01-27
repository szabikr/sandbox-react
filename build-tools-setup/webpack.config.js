const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Regex for selecting javascript files
        exclude: /node_modules/, // we don't want node_modules to be transpiled as they already should be
        use: ['babel-loader'], // using the babel loader which looks for its setup in .babelrc file
      },
      {
        test: /\.(sa|sc|c)ss$/i, // Regex for selecting all css files
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // helps to leave out file extension when importing modules
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // where the static files are
    },
    port: 8080,
    hot: true, // hot module replacement
    open: true, // open browser window when dev server starts
  },
};
