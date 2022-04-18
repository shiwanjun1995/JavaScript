# return的几种方式

# 使用return的地方 要么是要返回函数值 要么就是要提前终止函数执行

## 表单提交中

```js
<form action="" id="form">
    <input type="text" name="aa">
    <button id="submit" οnclick="return">提交</button>
</form>

<form action="" id="form">
    <input type="text" name="aa">
    <button id="submit" οnclick="return false">提交</button>
</form>
```

第一个例子中表单还会继续提交
第二个例子中表单不会提交

return null 中断方法执行的效果 事件处理函数将会继续执行 表单将提交
return false 事件处理函数会取消事件 不再继续向下执行 比如表单将终止提交
