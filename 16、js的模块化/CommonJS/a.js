// node.js 采用了 CommonJS 规范，一个文件就是一个模块，每个模块都有自己的作用域。
// var name = '张三'
// var age = 30

// module.exports = {
//   name: name,
//   age,
// }

// a.js
module.exports = 123

setTimeout(() => {
  module.exports = 456
}, 1000)
