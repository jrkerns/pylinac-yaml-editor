// webpack.config.js
const path = require('path');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		app: './src/index.js',
		'editor.worker': 'monaco-editor/esm/vs/editor/editor.worker.js',
		// 'json.worker': 'monaco-editor/esm/vs/language/json/json.worker',
		// 'css.worker': 'monaco-editor/esm/vs/language/css/css.worker',
		// 'html.worker': 'monaco-editor/esm/vs/language/html/html.worker',
		// 'ts.worker': 'monaco-editor/esm/vs/language/typescript/ts.worker'
	},
  output: {
    globalObject: "self",
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/pylinac-yaml-editor', // Ensures proper path resolution
    clean: true
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
      new HtmlWebpackPlugin({
        template: "./index.html",
        inject: true
      }),
    new MonacoWebpackPlugin({
      languages: ['python'],
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
    watchFiles: ['*.html'], // Watch for changes in HTML files
  },
  devtool: 'inline-source-map', // Useful for debugging
};
