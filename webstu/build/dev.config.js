const WebpackMerge = require("webpack-merge");
const baseConfig = require("./base.config")


module.exports = WebpackMerge.merge(baseConfig)

