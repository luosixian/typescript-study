//引入一个包
const path = require('path');

// webpack中的所有配置信息都应该写在module.exports中
module.exports = {

    // 指定入口文件
    entry: './src/index.ts',

    output: {
        //指定打包文件放在哪
        path: path.resolve(__dirname, 'dist'),

        //指定打包文件叫什么
        filename: "bundle.js"
    },

    //指定webpack打包时要用的模块
    module: {
        // 指定加载的规则
        rules: [
            {
                // test指规则生效的文件，使用正则表达式
                // 这里的意思是用ts-loader去处理以ts结尾的文件
                test: /\.ts$/,
                use: 'ts-loader',
                // 要排除的文件
                exclude: /node-modules/
            }
        ]
    }
}