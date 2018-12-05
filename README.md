# webpack-demo  [博客](https://blog.csdn.net/u012067966/article/details/50736647) 

## webpack 版本号4.0.0以上


将 babel-preset-* 卸载，重新安装 @babel/preset-* ，并且修改 .babelrc 中的 presets
```
npm:
- babel-preset-env
+ @babel/perset-env

.babelrc:
- "presets": ["env"]
+ "presets": ["@babel/preset-env"]
```
另，` stage-*` 已弃用



安装sass的依赖包

npm install --save-dev sass-loader

<font color=red>sass-loader</font>依赖于<font color=red>node-sass</font><br/>
npm install --save-dev node-sass
*

提取css到外部link，而非style标签，需要用 <font color=red>extract-text-webpack-plugin</font> 插件
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
*


在编写js时，因为有可能js文件是在很多级的目录当中，如果每次都使用 .. 来定位上一层目录的话，那么这个定位就会十分繁琐。这时可以使用 webpack 提供的 resolve.alias 配置来使引入文件的时候变得更加方便简单。
