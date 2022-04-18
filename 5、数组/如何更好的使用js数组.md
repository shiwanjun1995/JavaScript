## 1.用 Array.includes() 代替 Array.indexOf()

‘’如果想在数组中查找某些内容，请使用Array. indexof“，毫无疑问，这句话是千真万确的。

1.1 如果我们需要在代码和数组中使用返回的索引 Array.indexOf() “返回可以找到给定元素的第一个索

1.2 如果我们只需要知道数组是否包含一个值 使用返回布尔值的Array.includes() 。

## 2.用 Array.find() 代替 Array.filter()

2.2 Array.filter() 会从一个数组中创建一个新的数组，我们往往使用此方法进行过滤以获取更短的数组

2.3 Array.find() 例如当使用一个通过唯一ID过滤的回调参数时，它将会返回一个新的只包含一项的数组

为了返回所有与会点函数数组匹配的项，Array.filter() 必须遍历整个数组，如果返回值是有数百个符号的项，过滤数组将变得非常庞大。

为了避免这些情况，我推荐使用 Array.find() 回调参数和 Array.filter() 一致，它返回满足这个回调函数的第一个元素的值，此外，当项返回时回调停止，他不需要浏览全部数组。

## 3.用 Array.some() 代替 Array.find()

这与我们的Array. indexof /Array.includes 非常相似。

3.1 Array.find() 返回一个元素。如果我们需要知道数组中是否包含值，那么Array.find是最佳解决方案?可能不会，因为它返回一个值，而不是一个布尔值。

3.2 Array.some() 返回一个需要的布尔值。

## 4.用 Array.reduce() 代替 Array.filter() 连接 Array.map()

事实上，理解Array.reduce并不简单。这是真的，但是，如果我们执行 Array.filter, 然后执行Array.map 看起来像遗漏了些什么对吧？

我的意思是，这里我们遍历了两遍数组。第一次过滤并生成一个短数组，第二次通过Array.filter又创造了新的数组，包含基于获得的新值。为了得到新的数组，我们使用了两个Array方法。每个方法有自己的回调函数和一个以后不能使用的数组—由Array.filter创建数组。

为了避免在这个问题上表现不佳, 我建议使用Array.reduce 来代替.同样的结果，更完美的代码！Array.reduce 允许您过滤和添加满意的项目累加器。例如, 这个累加器可以是要递增的数字、要填充的对象、要连接的字符串或数组。

在我们的例子中，自从我们使用 Array.map,我推荐使用Array.reduce 作为数组累加器. 

