pugFiles = utils.getEntry(pugFiles, ['.pug', dir_root+'/'])

for (var key in pugFiles) {
    if (pugFiles.hasOwnProperty(key)) {
        let opt = {
            filename: './view/'+ key +'.html',
            template: pugFiles[key],
            hash: true,
            minify: { //压缩HTML文件
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: false //删除空白符与换行符
            }
        }
        if (entry.hasOwnProperty(key)) {
            opt['chunks'] = ['vendors', key]
            opt['inject']= 'body'
        }
        console.log(opt);
        plugins.push(new HtmlWebpackPlugin(opt))
    }
}

module.exports = plugins