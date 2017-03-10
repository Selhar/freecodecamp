var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, "public"),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader','sass-loader'],
                        publicPath: '/public'
                    })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'REPLACE ME YOU DEVILISH FUCKHEAD IM AT /WEBPACK.CONFIG.JS LINE 9 REPLACE ME FUCKEHAD',
            minify: {
                collapseWhitespace: false
            },
            hash: true,
            template: './src/helpers/index.html', 
        }), 
        new ExtractTextPlugin({
            filename: 'main.css',
            disable: false,
            allChunks: true
        })
  ]
}