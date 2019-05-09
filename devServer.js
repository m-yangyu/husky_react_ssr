import webpack from 'webpack';
import middleware from 'webpack-dev-middleware';
import devServerConfig from './webpack/webpack.devSever.conf';
import devClientConfig from './webpack/webpack.dev.conf';
import {ChunkExtractor} from '@loadable/server';
import express from 'express';
import MFS from 'memory-fs';
import path from 'path';

const app = new express();
const fs  = new MFS();
const clientCompiler = webpack(devClientConfig);
const serverCompiler = webpack(devServerConfig);
const PORT = 8080;
let renderPath = '';
let render;

// 使用webpack-dev-middleware中间件（ webpack ， devServer用的插件 ）
app.use(middleware(clientCompiler , {
    noInfo: true,
    serverSideRender: true,
    publicPath: devClientConfig.output.publicPath,
}))
// 监听客户端内容编译完成
clientCompiler.hooks.done.tap("done", stats=>{
    const info = stats.toJson();
    if( stats.hasErrors ) console.log(info.errors);
    if( stats.hasWarnings ) console.log(info.warnings);
    
})
// 修改服务端编译的输出方式（ memory-fs 输入到内存 ）
serverCompiler.outputFileSystem = fs;
serverCompiler.watch({
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/,
},(err , stats)=>{
    
    if(err) return console.log(err);
    console.log('compiler done');
    // 编译到内存的路径
    renderPath = path.join( devServerConfig.output.path , devServerConfig.output.filename );
    // 读取内容并转成String类型
    const content = fs.readFileSync( renderPath , 'utf-8').toString();
    // 因为读取的是js文件，所以直接执行可以获取到输出的内容 
    // new Function 找不到module 所以改用eval，由于在后端所以避免了风险
    render = eval(content).default;
})
// 设置项目的静态文件地址
app.use( express.static( devServerConfig.output.path ) );
app.get('/*',(req,res)=>{
    // console.log(  , '111111');
    const manifest = JSON.parse(clientCompiler.outputFileSystem.readFileSync(`${clientCompiler.outputPath}/manifest.json`));
    res.send( render( req.url , manifest) );
})
app.listen(PORT,function(){
    console.log('启动成功：localhost:' + PORT);
})