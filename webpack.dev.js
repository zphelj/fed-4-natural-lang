const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: './src/client/index.js',
    output: {
        //path: path.join(__dirname, 'dist'),
        //filename: 'bundle.min.js',
        libraryTarget: 'var',
        library: 'Client'
    },
    mode: 'development',
    devtool: 'source-map',
    stats: 'verbose',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: false,
        host: 'localhost',
        port: 8080,
        open: true
      },
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: '/images/',
                    publicPath: 'images/',
                    query: {
                      name: 'images/[name].[ext]',
                    },
                },
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true
            // Automatically remove all unused webpack assets on rebuild
            //cleanStaleWebpackAssets: true,
            //protectWebpackAssets: false
        })
    ]
}
