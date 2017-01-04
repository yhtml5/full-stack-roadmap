const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const minify = require('html-minifier').minify;
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const version = require('./webpack.version')

module.exports = {
    entry: {
        main: './app/index.js',
    },
    output: {
        filename: '[name].js?[hash]',
        path: path.resolve(__dirname, './dist'),
        publicPath: "./"
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: 'babel-loader'
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                notExtractLoader: "style-loader",
                loader: "css-loader?sourceMap",
                publicPath: "./"
            })
        }]
    },
    devServer: {
        hot: true,
        // enable HMR on the server
        contentBase: resolve(__dirname, 'dist'),
        // match the output path
        publicPath: '/'
        // match the output `publicPath`
    },
    devtool: "cheap-eval-source-map",
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css?[hash]',
            disable: false,
            allChunks: true
        }),
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
