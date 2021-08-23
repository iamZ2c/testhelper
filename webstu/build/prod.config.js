const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const webpackMerge = require("webpack-merge");
const baseConfig = require("./base.config")


module.exports = webpackMerge.merge(baseConfig,
    {
        //插件配置
        plugins: [
            new UglifyjsWebpackPlugin()
        ],
    }
)

