const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webApack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: './src/imp.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bunde.js',
        // 解决file-loader，打包打在dist文件里，无法加载路径的问题。
        // publicPath: 'dist/',
    },
    //resolve一般解决路径问题
    resolve:{
        // 解决后缀名称不用写后缀也可以知道到指定文件
        // extensions:['.vue'],
        // alias:别名,給需要使用的vue文件取个别名。
        alias:{
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    // css-loader负责把css文件进行加载
    // style-loader·负责把样式添加dom里面
    // loader是从右往左读取的
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        // 家在的图片小于limit会将图片编译成base64字符串形式，如果是大于了limit就会使用file-loader来进行加载
                        options: {
                            limit: 400,
                            name: 'img/[name].[hash:8].[ext]'
                        },
                    },
                ],
            },
            // es6 转化es5语法loader配置
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.vue$/,
                use:{
                    loader: 'vue-loader'
                }
            },
        ],
    },
    //插件配置
    plugins: [
        new webpack.BannerPlugin('Mr.zhang have the code'),
        new HtmlWebpackPlugin({
            template:'test.html'
        }),
        new UglifyjsWebpackPlugin()
    ],
    // npm自动起的服务 contentbase 是监控的位置
    devServer: {
        contentBase: './dist',
        inline: true
    }
}
