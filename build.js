import webpack from 'webpack'; 
import clientConfig from './webpack/webpack.pro.conf';
import ServerConfig from './webpack/webpack.proSever.conf';
import ora from 'ora';

const spinner = ora('building for production....');
spinner.start();

const clientBuild = () => new Promise( (resolve , reject) => {
    webpack(clientConfig,(err,stats)=> err ? reject(err) : resolve(stats))
})

const serverBuild = () => new Promise( (resolve , reject) => {
    webpack(ServerConfig,(err,stats)=> err ? reject(err) : resolve(stats))
})

async function build(){

    const client = await clientBuild();
    const server = await serverBuild();

    process.stdout.write(client.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n\n')

    process.stdout.write(server.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false,
    }) + '\n\n')
    spinner.stop();
};
build();