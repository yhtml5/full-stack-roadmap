### 声明提前

```
function test() {
  console.log(a);
  console.log(foo());
  var a = 1;
  function foo() {
  return 2;
  }}
test();
```
变量和函数的声明都被提前至函数体的顶部，而同时变量并没有被赋值。因此，当打印变量a时，它虽存在于函数体（因为a已经被声明），但仍然是undefined。
换句话说，上面的代码等同于下面的代码：

```
function test() {
  var a;
  function foo() {
  return 2;
  }
  console.log(a);
  console.log(foo());
  a = 1;
}
test();
```

### this
函数体内: this指代全局对象(window/undefind)
函数体外: 指的是函数执行的上下文,取决于函数是如何调用的
