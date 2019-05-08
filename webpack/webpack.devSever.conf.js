import webpack from 'webpack';
import path from 'path';
import merge from 'webpack-merge';
import base from './webpack.base.conf';
import {serverBabel} from './babel.config';

const serverWebpack = merge( base , {

    mode: 'development',
    entry: './utils/render.js',
    target: 'node',
    node:{
        __dirname: true,
    },
    output:{
        path: path.resolve(__dirname, '../dist'),
        filename: 'render.js',
        publicPath: './',
        libraryTarget: 'commonjs2',
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
    ],
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                options:serverBabel,
                exclude: [/node_modules/],
            },
            { 
                enforce: "pre", 
                test: /\.js$/, loader: "source-map-loader" 
            },
        ]
    }

})

export default serverWebpack;