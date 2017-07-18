var webpack = require("webpack");
var path = require('path');
var APP_DIR = path.resolve(__dirname,"src");
var OUT_DIR = path.resolve(__dirname,"assets");
module.exports = {
  entry : APP_DIR+ "/index.js",
  output: {
           path:OUT_DIR,
           filename:"bundle.js",
           publicPath:"assets"
  },    
    devServer:{
      inline:true,
      port:8080
    },
  module:{
    loaders:[ 
        {
              test :/\.js$/,
              exclude:/(node_modules)/,
              loader:[   'babel-loader?' +
                       'babelrc=false,' +
                       'presets[]=es2016,' +
                       'presets[]=stage-0,' +
                       'presets[]=react']
            },
            {
              test:/\.json$/,
              exclude:/(node_modules)/,
              loader:"json-loader"
            },
            {
              test:/\.css$/,
              loader: "style-loader!css-loader!autoprefixer-loader"
            },
             {
              test:/\.scss$/,
              loader: "style-loader!css-loader!autoprefixer-loader!sass-loader"
            }
    ]
  }
}