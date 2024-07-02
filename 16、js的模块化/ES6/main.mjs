import { area } from './circle.mjs' // 指定加载某个输出值

console.log(area)

import * as circle from './circle.mjs' // 整体加载，所有输出值都会加载到这个对象上

console.log(circle)

// 参考资料：
// 1、https://github.com/morrain/front-end/blob/master/module/README.md
// 2、https://juejin.cn/post/7169782602411278366
