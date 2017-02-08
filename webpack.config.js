const webpack = require('webpack');
const path = require('path');

const env = process.env.NODE_ENV;
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const library = 'library';
const plugins = [];
let outputFile;

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ sourceMap: true }));
  outputFile = `${library}.min.js`;
} else {
  outputFile = `${library}.js`;
}

module.exports = {
  entry: path.join(__dirname, 'src', `${library}.js`),
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'lib'),
    filename: outputFile,
    library,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve('/src'),
    ],
    extensions: ['.js'],
  },
  plugins,
};
