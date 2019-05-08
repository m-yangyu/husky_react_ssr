# mj_webpack_react_ssr

#### 介绍

mj ssr脚手架
用于构建单页应用，使用了browserRouter确认路由，redux跟thunk管理数据，node编写的脚本内容，通过webpack提供的node api生成文件使用


#### 目录

- webpack ： 包含webpack的配置文件
- src     ： 主要js目录

   - component：组件内容
   - pages   ：入口文件
   - redux   ：redux入口
   - store   ：生成store的方法
   - sass    ： sass样式目录
   - app.js  ： react文件统一入口
   - index.js： 渲染入口
   
- utils  ： 主要功能函数
- build.js：启动构建的方法
- devServer.js：启动dev模式的文件
- server.js：打包构建的服务端内容


#### 安装教程

1. git clone https://gitee.com/moongii_frontend/webpack.git
2. npm install
3. npm run node-dev 启动开发环境
4. npm run build  构建
5. npm run server 运行预览

#### 使用说明

1. 所有的router入口文件写在src/pages目录下
2. 推荐使用sass做css预处理
3. 尽量不修改build.js devServer.js server.js内容
4. 功能方法，第三方方法，放进utils中

#### 参与贡献

1. husky创建脚手架