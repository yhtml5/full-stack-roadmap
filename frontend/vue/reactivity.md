# 深入响应式原理

## Reference

[原理](https://cn.vuejs.org/v2/guide/reactivity.html)

> Object.defineProperty


## Notice

### Vue 不能检测到对象属性的添加或删除
受现代 JavaScript 的限制 (而且 Object.observe 也已经被废弃)，  
由于 Vue 会在初始化实例时对属性执行 getter/setter 转化过程，  
所以属性必须在 data 对象上存在才能让 Vue 转换它，这样才能让它是响应的

```js
Vue.set(vm.someObject, 'b', 2)
this.$set(this.someObject,'b',2)

// 代替 `Object.assign(this.someObject, { a: 1, b: 2 })`
this.someObject = Object.assign({}, this.someObject, { a: 1, b: 2 })
```
