const path = require('path');
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const minify = require('html-minifier').minify;
const version = require('./webpack.version')

const isEnvPro = () => process.env.NODE_ENV == 'production'
const isEnvDev = () => process.env.NODE_ENV == 'development'
const isEnvDebug = () => process.env.NODE_ENV == 'debug'

let hasMinString = () => (isEnvPro() || isEnvDebug()) ? ".min" : ""

let config = function () {
    return {
        context: path.resolve(__dirname, "../app"),//The base directory, an absolute path, for resolving entry points and loaders from configuration.
        entry: {
            index: './index.jsx',
            vendor: ['react', 'react-dom', 'react-redux', 'react-router', 'react-router-redux', 'redux',],
            login: './login.js',
        },
        resolve: {
            alias: {
                react: "react/dist/react" + hasMinString() + ".js",
                "react-dom": "react-dom/dist/react-dom" + hasMinString() + ".js",
                "react-redux": "react-redux/dist/react-redux" + hasMinString() + ".js",
                "react-router": "react-router/umd/ReactRouter" + hasMinString() + ".js",
                "react-router-redux": "react-router-redux/dist/ReactRouterRedux" + hasMinString() + ".js",
                redux: "redux/dist/redux" + hasMinString() + ".js",
            }
        },
        output: {
            filename: 'static/[name].[hash:6].js',//determines the name of each output bundle
            path: path.resolve(__dirname, '../dist/' + version),//The base directory, an absolute path
            pathinfo: false,//include comments in bundles with information about the contained modules
            publicPath: "./",//the URL of your output.path from the view of the HTML page,if you want to open from the local files, you can set './'
        },
        module: {
            rules: [{
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader',
            }, {
                test: /\.css$/,
                // use: [
                //     'style-loader',
                //     'css-loader?modules',
                //     'postcss-loader',
                // ],
                loader: ExtractTextPlugin.extract({
                    notExtractLoader: "style-loader",
                    loader: "css-loader?sourceMap",
                    publicPath: "/"
                })
            }, {
                test: /\.html$/,
                loader: 'html-loader'
            }, {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=10000'
            }]
        },
        plugins: [
            new ExtractTextPlugin({
                filename: 'static/[name].[chunkhash:6].css',
                disable: false,
                allChunks: true
            }),
            new webpack.optimize.CommonsChunkPlugin({ //https://webpack.js.org/plugins/commons-chunk-plugin/
                name: ['vendor', 'manifest'],// Specify the common bundle's name.
                // minChunks: Infinity
            }),
            new HtmlWebpackPlugin({
                chunks: ['index', 'vendor', 'hot', 'manifest'],//only certain chunks you can limit the chunks being used
                excludeChunks: ['login'],//exclude certain chunks
                filename: 'index.html',
                template: 'template.js',
                title: 'INDEX',
                hash: false,//if true (!default) append a unique webpack compilation hash to all included scripts and CSS files. This is useful for cache busting.
                cache: true, //if true (default) try to emit the file only if it was changed
                favicon: 'favicon.ico',
                minify: {
                    collapseWhitespace: true,
                    removeComments: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    trimCustomFragments: true
                }
            }),
            new HtmlWebpackPlugin({
                chunks: ['login'],//only certain chunks you can limit the chunks being used
                filename: 'login.html',
                template: 'template.js',
                title: 'LOGIN',
                hash: false,
                cache: false,
                favicon: 'favicon.ico',
                minify: {
                    collapseWhitespace: true,
                    removeComments: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    trimCustomFragments: true
                }
            }),
        ]
    };
}


console.log("Node environment: ", process.env.NODE_ENV)
console.log("Webpack absolute path: ", path.resolve(__dirname, "../app"))

module.exports = config