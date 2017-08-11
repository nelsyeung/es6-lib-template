const path = require('path');
const webpack = require('webpack');

const library = 'library';
const outputFile =
  process.env.NODE_ENV === 'production' ? `${library}.min.js` : `${library}.js`;
const plugins = [new webpack.optimize.ModuleConcatenationPlugin()];

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
    modules: ['node_modules', path.resolve('/src')],
    extensions: ['.js'],
  },
  plugins,
};
