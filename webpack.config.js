// webpack.config.js
const path = require('path');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/pylinac-yaml-editor', // Ensures proper path resolution
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(ttf|woff|woff2|eot|svg)$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  mode: 'development', // Set to development for better debugging
  plugins: [
    new MonacoWebpackPlugin({
      languages: ['yaml'],
      // Add any other languages or features you need
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true, // Enable gzip compression for everything served
    port: 9000, // You can change the port if needed
    open: true, // Automatically open the browser
    hot: true, // Enable hot module replacement
    historyApiFallback: true, // For SPAs, ensures that the index.html is served for any 404 responses
  },
  devtool: 'inline-source-map', // Useful for debugging
};
