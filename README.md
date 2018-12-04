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
