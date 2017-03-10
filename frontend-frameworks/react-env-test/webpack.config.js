var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/main.js',
    output: {
        path: "public",
        filename: 'main.js'
    },
    plugins: [new HtmlWebpackPlugin({
    title: 'REPLACE ME YOU DEVILISH FUCKHEAD IM AT /WEBPACK.CONFIG.JS LINE 9 REPLACE ME FUCKEHAD',
    template: './src/helpers/index.html', // Load a custom template (ejs by default see the FAQ for details)
  })]
}