import webpack from 'webpack';
import merge from 'webpack-merge';
import path from 'path';
import cleanWebpackPlugin from 'clean-webpack-plugin';
import htmlWebpackPlugin from 'html-webpack-plugin';
import {clientBabel} from './babel.config';
import LoadablePlugin from '@loadable/webpack-plugin';
import baseConfig from './webpack.base.conf';
import manifestPlugin from 'webpack-manifest-plugin';

module.exports = merge( baseConfig , {

    mode: 'development',
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, '../dist'),
        filename: 'assets/js/[name].[hash].js',
        chunkFilename:'[name][chunkhash].js',
        publicPath: '/',
    },
    devtool: 'cheap-module-eval-source-map',
    devServer:{
        contentBase: './dist',
        hot:true,
    },
    plugins:[
        new cleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new LoadablePlugin(),
        new manifestPlugin(),
    ],
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                options:clientBabel,
                exclude: [/node_modules/],
                // include: includePath,
            },
            { 
                enforce: "pre", 
                test: /\.js$/, loader: "source-map-loader" 
            },
        ]
    }

})