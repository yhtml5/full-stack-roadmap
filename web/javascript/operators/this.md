### this
函数体内: this指代全局对象(window/undefind)
函数体外: 指的是函数执行的上下文,取决于函数是如何调用的

```
var a = { a:function a(){
   console.log(this)
   setTimeout(function(){console.log(this)}, 0 )
}}
```

### call && bind && apply
bind后函数不会执行，而只是返回一个改变了上下文的函数副本，而call和apply是直接执行函数

