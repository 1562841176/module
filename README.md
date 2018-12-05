# webpack-demo   [md设置](https://github.com/guodongxiaren/README/blob/master/README.md) 


## webpack 版本号4.0.0以上

* ### SplitChunksPlugin代替CommonsChunkPlugin
```
module.exports = {
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    },
    minimizer: true, // [new UglifyJsPlugin({...})]
    splitChunks:{
      chunks: 'async',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: false,
      cacheGroups: {
        vendor: {
          name: 'vendor',
          chunks: 'initial',
          priority: -10,
          reuseExistingChunk: false,
          test: /node_modules\/(.*)\.js/
        },
        styles: {
          name: 'styles',
          test: /\.(scss|css)$/,
          chunks: 'all',
          minChunks: 1,
          reuseExistingChunk: true,
          enforce: true
        }
      }
    }
  }
}
```
将 babel-preset-* 卸载，重新安装 @babel/preset-* ，并且修改 .babelrc 中的 presets
```
npm:
  babel-preset-env
  @babel/perset-env

.babelrc:
 "presets": ["env"]
 "presets": ["@babel/preset-env"]
```
另，` stage-*` 已弃用

* ### 安装sass的依赖包

npm install --save-dev sass-loader

<font color=red>sass-loader</font>依赖于<font color=red>node-sass</font><br/>
npm install --save-dev node-sass
*

提取css到外部link，而非style标签，需要用 <font color=red> extract-text-webpack-plugin </font> 插件
```
{
    test: /\.(scss|sass|css)$/,
    use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: [{
                loader: "css-loader",
                options: {
                    // // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
                    importLoaders: 2
                }
            },
            'postcss-loader',
            'sass-loader'
        ]
    })
}
```

 在编写js时，因为有可能js文件是在很多级的目录当中，如果每次都使用 .. 来定位上一层目录的话，那么这个定位就会十分繁琐。这时可以使用 webpack 提供的 resolve.alias 配置来使引入文件的时候变得更加方便简单。
 
 
* ### babel
 
虽然ES6标准已经出来挺长一段时间了，但是许多浏览器还是不能完全支持新的语法及API。于是我们要想办法将ES6让那些老旧的浏览器支持。webpack并不会替我们完成这个工作，但是它有各种loaders可用于转化我们的代码。[查看](https://www.jianshu.com/p/3a13f1b37300)

babel-loader就是用于将ES6或更高版本标准的JS转换成ES5的loader。
```
npm i babel-core babel-loader babel-preset-env --save-dev
```

在根目录新建一个.babelrc来指定Babel的配置：

```
{
    "presets": ["env"]
}
```

```
module.exports = {
  module: {
     rules: [
        { 
          test: /\.js$/, 
          exclude: /node_modules/, 
          use: {
            loader: "babel-loader"
          }
        }
     ]
  }
}
```



