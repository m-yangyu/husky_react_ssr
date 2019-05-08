import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import antdConfig from './antd.config';

export default {

    resolve:{
        alias:{
            "src": path.resolve(__dirname , '../src'),
            "SASS": path.resolve('src/sass'),
            "COMPONENT": path.resolve( 'src/component' ),
            "REDUX": path.resolve('src/redux'),
            "ROUTER": path.resolve('src/router'),
            "STORE": path.resolve('src/store'),
            "PAGES": path.resolve('src/pages'),
            "UTILS": path.resolve(__dirname , '../utils'),
        },
        extensions: [
            ".ts",
            ".tsx",
			".web.js",
			".js",
			".jsx",
			".less",
			".css",
			".json",
			".scss"
		] //自动解析的扩展
    },
    module:{

        rules:[
            {
                test: /\.ts|tsx$/,
                loader: "awesome-typescript-loader",
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options:{
                            modifyVars: antdConfig,
                            javascriptEnabled: true,
                        }
                    }
                ],

            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: 'url-loader',
                options:{
                    limit: 10000,
                    name: 'assets/img/[name].[hash:7].[ext]'
                },
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  name: 'media/[name].[hash:7].[ext]'
                }
              },
              {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  name: 'fonts/[name].[hash:7].[ext]'
                }
              },
        ]

    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].[hash].css',
            chunkFilename: 'assets/css/[id].css',
        }),
    ]


}