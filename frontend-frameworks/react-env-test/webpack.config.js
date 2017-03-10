var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/main.js',
    output: {
        path: "public",
        filename: 'main.js'
    },
    plugins: [new HtmlWebpackPlugin()]
}