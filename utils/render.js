import {Provider} from 'react-redux';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import getTpl from './getTpl';
import configureStore from 'STORE';
// import isObject from 'isobject';
import routerConfig from 'ROUTER';

// 设置store内容
const store = configureStore();
export default function( url , manifest){

    if( !routerConfig[url] ){
        return null;
    }
    // 获取客户端打包生成在内存中的数据
    // const assetsByChunkName = res.locals.webpackStats.toJson().assetsByChunkName;
    // const fs = res.locals.fs;
    // const outputPath = res.locals.webpackStats.toJson().outputPath;
    // 获取文件中存在的js和css
    // const js = jsLoader(assetsByChunkName.main);
    // const css = cssLoader(assetsByChunkName.main, outputPath , fs);
    // 通过manifest来生成js跟css

    const js = manifestJsLoader( manifest );
    const css = manifestCssLoader( manifest );
    // 获取当前路由下面的组件
    const Component = routerConfig[url].component;

    const html = renderToStaticMarkup(  
    <Provider store={store}>
        <StaticRouter location={url} context={{}}>
            <Component/>
        </StaticRouter>
    </Provider> );

    return getTpl( html , css , js )

}

// function normalizeAssets(assets) {
//     if (isObject(assets)) {
//       return Object.values(assets);
//     }
  
//     return Array.isArray(assets) ? assets : [assets];
// }
// const cssLoader = (content , outputPath , fs) => {
//     return normalizeAssets(content)
//         .filter((path) => path.endsWith('.css'))
//         .map((path) => fs.readFileSync(outputPath + '/' + path))
//         .join('\n')
// }
// const jsLoader = (content) => {
//     return normalizeAssets(content)
//     .filter((path) => path.endsWith('.js'))
//     .map((path) => `<script src="${path}"></script>`)
//     .join('\n');
// }

const manifestJsLoader = ( manifest ) => {

    return  Object.keys(manifest)
            .filter(item=>item.endsWith('.js'))
            .map(item=>`<script src="${manifest[item]}"></script>`)
            .join('\n');

}
const manifestCssLoader = ( manifest ) => {

    return  Object.keys(manifest)
            .filter(item=>item.endsWith('.css'))
            .map(item=>`<link rel="stylesheet" href="${manifest[item]}"/>`)
            .join('\n');

}