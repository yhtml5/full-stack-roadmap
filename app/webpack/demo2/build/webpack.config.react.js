const {resolve} = require('path');
const webpack = require('webpack');

console.log("Webpack path: ", resolve(__dirname, '../src'))

module.exports = {
    context: resolve(__dirname, '../src'),
    entry: [
        'react-hot-loader/patch',
        // activate HMR for React
        'webpack-dev-server/client?http://localhost:8080',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint
        'webpack/hot/only-dev-server',
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates
        './index.jsx'
        // the entry point of our app
    ],
    output: {
        filename: 'bundle.js',
        // the output bundle
        path: resolve(__dirname, '../dist'),
        publicPath: '/'
        // necessary for HMR to know where to load the hot update chunks
    },
    devtool: false,
    devServer: {
        hot: true,
        // enable HMR on the server
        contentBase: resolve(__dirname, '../dist'),
        // match the output path
        publicPath: '/',
        noInfo: true,
        // match the output `publicPath`
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: ['babel-loader',],
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader?modules',
                'postcss-loader',
            ]
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally
        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates
    ],
};
