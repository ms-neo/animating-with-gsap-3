require('dotenv').config();
// const webpack=require('webpack');
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        publicPath:'',
        path:path.join(__dirname + '/dist'),
        filename: 'main.js'
    },
    module: {

        rules: [{
                test: /\.js$/, //fining any javascriot file
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true,
                        // name: "[name].[hash].[ext]"
                    }
                }]
            },
            {
                test: /\.(mp4|png|jpg|gif|svg|jpeg|webp)$/,
                use: ['file-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html', //the input in the orginal file in src path
            filename: './index.html' //the output which is created in dist path
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        // new webpack.DefinePlugin(
        //     {'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)}
        // ),
        // new HtmlWebpackPlugin()
    ]
}