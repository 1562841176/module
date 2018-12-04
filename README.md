# module

webpack 版本号4.0.0以上

将 babel-preset-* 卸载，重新安装 @babel/preset-* ，并且修改 .babelrc 中的 presets
npm:
- babel-preset-env
+ @babel/perset-env

.babelrc:
- "presets": ["env"]
+ "presets": ["@babel/preset-env"]

另，stage-*已弃用


安装sass的依赖包

npm install --save-dev sass-loader
//sass-loader依赖于node-sass
npm install --save-dev node-sass


提取css到外部link，而非style标签，需要用 extract-text-webpack-plugin 插件
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
