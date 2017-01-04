const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const minify = require('html-minifier').minify;
const webpack = require('webpack')

const version = require('./webpack.version')

module.exports = {
    entry: './app/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
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
