const path = require('path');
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const minify = require('html-minifier').minify;

const version = require('./webpack.version')

module.exports = {
    context: path.resolve(__dirname, "./"),//The base directory, an absolute path, for resolving entry points and loaders from configuration.
    entry: {
        index: './app/index.js',
        login: './app/login.js',
    },
    output: {
        filename: 'static/[name].js?[hash:6]',//determines the name of each output bundle
        path: path.resolve(__dirname, 'dist/' + version),//The base directory, an absolute path
        pathinfo: false,//include comments in bundles with information about the contained modules
        publicPath: "./",//the URL of your output.path from the view of the HTML page,if you want to open from the local files, you can set './'
    },
    module: {
        rules: [{
            test: /\.app\/(js|jsx)$/,
            use: 'babel-loader',
        }, {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: {
                presets: ['react', 'es2015']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                notExtractLoader: "style-loader",
                loader: "css-loader?sourceMap",
                publicPath: "/"
            })
        }, {
            test: /\.html$/,
            loader: 'html-loader'
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
            filename: 'static/[name].css?[hash:7]',
            disable: false,
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            chunks: ['index'],//only certain chunks you can limit the chunks being used
            excludeChunks: '',//exclude certain chunks
            filename: 'index.html',
            template: 'app/template.js',
            title: 'HOME',
            favicon: 'app/favicon.ico',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                trimCustomFragments: true
            }
        }),
        new HtmlWebpackPlugin({
            excludeChunks: ['index'],
            filename: 'login.html',
            template: 'app/template.js',
            title: 'LOGIN',
            favicon: 'app/favicon.ico',
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
