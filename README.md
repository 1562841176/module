# module

将 babel-preset-* 卸载，重新安装 @babel/preset-* ，并且修改 .babelrc 中的 presets
npm:
- babel-preset-env
+ @babel/perset-env

.babelrc:
- "presets": ["env"]
+ "presets": ["@babel/preset-env"]

另，stage-*已弃用
