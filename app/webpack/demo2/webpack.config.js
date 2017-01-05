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
        clientLogLevel: "info", //none, error, warning or info (default)
        contentBase: path.join(__dirname, "dist"), //serves everything from our dist/ directory
        compress: true, //enable gzip
        host: "0.0.0.0",// server can accessible externally
        inline: true,//defult inline, <iframe>
        noInfo: false,
        port: 61200,
        publicPath: '/', //The bundled files will be available in the browser under this path.|| demo: /assets/
        quiet: false,//means that errors or warnings from webpack are not visible.
        watchContentBase: false,//File changes will trigger a full page reload
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
