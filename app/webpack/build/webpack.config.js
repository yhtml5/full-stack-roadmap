const path = require('path');
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const minify = require('html-minifier').minify;

const version = require('./webpack.version')

console.log("Webpack absolute path: ", path.resolve(__dirname, "../app"))

module.exports = {
    context: path.resolve(__dirname, "../app"),//The base directory, an absolute path, for resolving entry points and loaders from configuration.
    entry: {
        index: './index.jsx',
        vendor: ['moment', 'react', 'react-dom'],
        login: './login.js',
        hot: ['react-hot-loader/patch', 'webpack-dev-server/client?http://localhost:61200', 'webpack/hot/only-dev-server'],
    },
    output: {
        filename: 'static/[name].js?[hash:6]',//determines the name of each output bundle
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
        }]
    },
    devServer: {
        clientLogLevel: "info", //[none, error, warning, info (default)]
        contentBase: path.join(__dirname, "../dist"), //serves everything from our dist/ directory
        compress: true, //enable gzip
        host: "0.0.0.0",// server can accessible externally
        hot: true,// enable HMR on the server
        inline: true,//defult inline, <iframe>
        port: 61200,
        publicPath: '/', //The bundled files will be available in the browser under this path.|| demo: /assets/
        noInfo: false,//webpack bundle information that is shown,Errors and warnings will still be shown.
        quiet: false,//errors or warnings from webpack are not visible.
        watchContentBase: false,//File changes will trigger a full page reload
    },
    devtool: "false",// [cheap-eval-source-map,false] , production set false
    plugins: [
        new ExtractTextPlugin({
            filename: 'static/[name].css?[hash:6]',
            disable: false,
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            chunks: ['index', 'vendor', 'hot', 'manifest'],//only certain chunks you can limit the chunks being used
            excludeChunks: ['login'],//exclude certain chunks
            filename: 'index.html',
            template: 'template.js',
            title: 'INDEX',
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
            favicon: 'favicon.ico',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                trimCustomFragments: true
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally
        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({ //https://webpack.js.org/plugins/commons-chunk-plugin/
            name: ['vendor', 'manifest'],// Specify the common bundle's name.
        }),
    ]
};
