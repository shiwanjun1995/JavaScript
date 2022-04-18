# npm insatll 安装的几种方式区别

##  1.dependencies：-S是--save的缩写
安装的文件会被写入到 dependencies 中 (像 express 这些模块是项目运行必备的，应该安装在 dependencies 节点下，所以我们应该使用--save的形式安装。)

## 2.devDependencies：-D是--save-dev的缩写
安装的文件会被写入到 devDependencies 中 (比如项目中使用的 gulp ，压缩css、js的模块。这些模块在我们的项目部署后是不需要的，所以我们可以使用--save-dev的形式安装。)

总结：
    运行时需要用到的包使用 -S [在线上环境运行时] ==> 生产环境
    开发中需要用到的包使用 -D [在实际开发过程中] ==> 开发环境

