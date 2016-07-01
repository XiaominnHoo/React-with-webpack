/**
 * Created by huxiaomin on 16/5/2.
 */
var path = require('path');
var webpack = require('webpack');
var ROOT_PATH = path.resolve(__dirname);
var SCSS_PATH = path.resolve(ROOT_PATH, './sass');

//var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8000/',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    path: path.resolve(ROOT_PATH),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  //配置 dev server; 可以serve我们pack以后的代码，并且当代码更新的时候自动刷新浏览器
  //jsx 文件或是 js 文件更新时，浏览器才会自动刷新，html 文件自有节点内容更新，浏览器不自动刷新（react hot??）
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.scss$/i,
        //loaders: ExtractTextPlugin.extract("style", "css", "sass"),
        // 多个 loader 写在一个数组中时，变量名为 loaders; 否则为 loader
        loaders: ["style", "css", "sass"],
        //loaders: ExtractTextPlugin.extract("style-loader", sassLoaders.join('!')),
      },
        //下面两个 loader 配置顺序很重要
      {
        test: /\.js?$/,
        loaders: ['react-hot', 'jsx'],
        exclude: /node_modules/
      },
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
    ]
  },
  resolve: {
    //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
    extensions: ['', '.js', 'jsx', '.json', '.scss'],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

};