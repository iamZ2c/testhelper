const path = require('path')
module.exports = {
    entry: './src/imp.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bunde.js',
    },
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
        ],
    },
}