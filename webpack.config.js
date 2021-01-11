const path = require('path');

module.exports = {
  entry: './src/code.ts',
  devtool: 'inline-source-map',
  watch: true,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        exclude: /node_modules/
    }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js', '.tsx' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};