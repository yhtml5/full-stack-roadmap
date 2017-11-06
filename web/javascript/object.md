### 给对象key赋值

```
var key= 'ttt',a={},b={},c={}

a[key] = 'Hello!';
b = {
  [key]: 'Hello!'
}
Object.defineProperty(c, key, { value: 'Hello!' });

console.log(a,b,c)
```

### 对象的比较
主要原因是基本类型string,number通过值来比较，而对象（Date,Array）及普通对象通过指针指向的内存中的地址来做比较

```
var a= b = {}

console.log(a==b,a===b) //true

b.c = 1

a==b  //true
a===b  //true
```





