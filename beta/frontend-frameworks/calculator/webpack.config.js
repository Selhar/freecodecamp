var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");
const public_folder = "public";

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, public_folder),
        filename: 'main.js'
    },
    devServer: {
        contentBase: path.join(__dirname, public_folder),
        compress: true,
        port: 9000,
        stats: "errors-only"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader','sass-loader'],
                    publicPath: '/'+public_folder
                })
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Calculator',
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
