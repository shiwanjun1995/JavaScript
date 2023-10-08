# npm insatll 安装的几种方式区别

## 1.dependencies：-S 是--save 的缩写

安装的文件会被写入到 dependencies 中 (像 express 这些模块是项目运行必备的，应该安装在 dependencies 节点下，所以我们应该使用--save 的形式安装。)

## 2.devDependencies：-D 是--save-dev 的缩写

安装的文件会被写入到 devDependencies 中 (比如项目中使用的 gulp ，压缩 css、js 的模块。这些模块在我们的项目部署后是不需要的，所以我们可以使用--save-dev 的形式安装。)

总结：【这个字段的 dev 的真正含义，更多是指 npm 包 的开发阶段所需要的依赖】
运行时需要用到的包使用 -S [在线上环境运行时] ==> 生产环境
开发中需要用到的包使用 -D [在实际开发过程中] ==> 开发环境

<!-- https://segmentfault.com/q/1010000022145874 -->
<!-- https://www.zhihu.com/question/310545060/answer/584122572 -->
<!-- https://juejin.cn/post/7135795969370619918 -->

1.NPM 的设计目标是帮助 node.js 程序解决依赖问题。后来，以 browserify 和 webpack 为代表的打包工具让它 也 可以帮助 web 前端开发者。 2.所以 package.json 是针对 node.js 设计的，尤其是 dependencies 和 devDependencies，前者表示运行时依赖，后者表示开发时依赖。前者表示运行时必须有，后者多数是测试工具、规范工具等。 3.对于 web 前端来说，上线的都是打包后的代码，运行时需求的代码都在里面，即并不需要 node_modules，所以你安装在 dependencies 还是 devDependencies 都无所谓。 4.想区分的话，安装的时候 npm i=dependencies，npm i -D=devDependencies。
