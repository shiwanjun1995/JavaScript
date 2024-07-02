// var b = require('./a.js')

// console.log(b.name)

// b.js
console.log(require('./a.js')) // 123

setTimeout(() => {
  console.log(require('./a.js')) // 456
}, 3000)
