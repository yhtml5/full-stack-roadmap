const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const minify = require('html-minifier').minify;
const webpack = require('webpack')

const version = require('./webpack.version')

console.log(__dirname)

module.exports = {
    entry: {
        main: './app/index.js',
        login: './app/login.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: "./"
    },
    module: {
        rules: [
            {test: /\.(js|jsx)$/, use: 'babel-loader'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                trimCustomFragments: true
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
};
