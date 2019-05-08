import webpack from 'webpack';
import path from 'path';
import merge from 'webpack-merge';
import base from './webpack.base.conf';
import {clientBabel} from './babel.config';
import cleanWebpackPlugin from 'clean-webpack-plugin';
import manifestPlugin from 'webpack-manifest-plugin';

const clientWebpack = merge( base , {

    mode: 'production',
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, '../dist'),
        filename: 'assets/js/[name].[hash].js',
        chunkFilename:'[name][chunkhash].js',
        publicPath: './',
    },
    plugins:[
        new manifestPlugin(),
        new cleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
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
        ]
    }

})

export default clientWebpack;