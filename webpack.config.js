var webpack = require("webpack");
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");

var config = {
   entry: './dev/app.js',
   output: {
      filename: './dist/bundle.js'
   },
	
   module: {
      loaders: [
         {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react', 'stage-2']
            }
         }
      ]
   }
}

module.exports = config;