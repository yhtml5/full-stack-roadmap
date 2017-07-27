### 原型与原型链

* 每个函数都有一个属性叫做原型，这个属性指向一个对象
* 原型只是函数的一个属性

也就是说，原型是函数对象的属性，不是所有对象的属性，对象经过构造函数new出来，那么这个new出来的对象的构造函数有一个属性叫原型。

每次你定义一个函数的时候，这个函数的原型属性也就被定义出来了，也就可以使用了，如果不对它进行显示赋值的话，那么它的初始值就是一个空的对象Object。

#### 继承和原型链

JavaScript 是动态的，并且本身不提供类实现.(在ES2015/ES6中引入了class关键字，但是只是语法糖，JavaScript 仍然是基于原型的)。
当谈到继承时，Javascript 只有一种结构：对象。

每个对象都有一个内部链接到另一个对象，称为它的原型 prototype。该原型对象有自己的原型，等等，直到达到一个以null为原型的对象。
根据定义，null没有原型，并且作为这个原型链 prototype chain中的最终链接。

虽然，原型继承经常被视作 JavaScript 的一个弱点，但事实上，原型继承模型比经典的继承模型更强大。
举例来说，在原型继承模型的基础之上建立一个经典的继承模型是相当容易的。


#### 继承属性

JavaScript 对象是动态的属性“包”（指其自己的属性）。
JavaScript 对象有一个指向一个原型对象的链。

当试图访问一个对象的属性时，它不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及该对象的原型的原型，
依此层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾。

遵循ECMAScript标准，someObject.__proto__ 符号是用于指派 someObject 的原型。这个等同于 JavaScript 的 __proto__  属性。
从 ECMAScript 6 开始, __proto__ 可以用Object.getPrototypeOf()和Object.setPrototypeOf()访问器来访问。

```
// 让我们假设我们有一个对象 o, 其有自己的属性 a 和 b：
// {a: 1, b: 2}
// o 的原型 o.__proto__有属性 b 和 c：
// {b: 3, c: 4}
// 最后, o.__proto__.__proto__ 是 null.
// 这就是原型链的末尾，即 null，
// 根据定义，null 没有__proto__.
// 综上，整个原型链如下: 
// {a:1, b:2} ---> {b:3, c:4} ---> null

console.log(o.a); // 1
// a是o的自身属性吗？是的，该属性的值为1

console.log(o.b); // 2
// b是o的自身属性吗？是的，该属性的值为2
// o.__proto__上还有一个'b'属性,但是它不会被访问到.这种情况称为"属性遮蔽 (property shadowing)".

console.log(o.c); // 4
// c是o的自身属性吗？不是，那看看o.__proto__上有没有.
// c是o.__proto__的自身属性吗？是的,该属性的值为4

console.log(o.d); // undefined
// d是o的自身属性吗？不是,那看看o.__proto__上有没有.
// d是o.__proto__的自身属性吗？不是，那看看o.__proto__.__proto__上有没有.
// o.__proto__.__proto__为null，停止搜索，
// 没有d属性，返回undefined
```

创建一个对象它自己的属性的方法就是设置这个对象的属性。唯一例外的获取和设置的行为规则就是当有一个 getter或者一个setter 被设置成继承的属性的时候。

#### 继承方法

JavaScript 并没有其他基于类的语言所定义的“方法”。
在 JavaScript 里，任何函数都可以添加到对象上作为对象的属性。
函数的继承与其他的属性继承没有差别，包括上面的“属性遮蔽”（这种情况相当于其他语言的方法重写）

当继承的函数被调用时，this 指向的是当前继承的对象，而不是继承的函数所在的原型对象。

```
var o = {
  a: 2,
  m: function(){
    return this.a + 1;
  }
};

console.log(o.m()); // 3
// 当调用 o.m 时,'this'指向了o.

var p = Object.create(o);
// p是一个对象, p.__proto__是o.

p.a = 12; // 创建 p 的自身属性a.
console.log(p.m()); // 13
// 调用 p.m 时, 'this'指向 p. 
// 又因为 p 继承 o 的 m 函数
// 此时的'this.a' 即 p.a，即 p 的自身属性 'a'
```

#### 如何实现继承



#### 使用不同的方法来创建对象和生成原型链

#### 使用普通语法创建对象
```
var o = {a: 1};

// o这个对象继承了Object.prototype上面的所有属性
// 所以可以这样使用 o.hasOwnProperty('a').
// hasOwnProperty 是Object.prototype的自身属性。
// Object.prototype的原型为null。
// 原型链如下:
// o ---> Object.prototype ---> null

var a = ["yo", "whadup", "?"];

// 数组都继承于Array.prototype 
// (indexOf, forEach等方法都是从它继承而来).
// 原型链如下:
// a ---> Array.prototype ---> Object.prototype ---> null

function f(){
  return 2;
}

// 函数都继承于Function.prototype
// (call, bind等方法都是从它继承而来):
// f ---> Function.prototype ---> Object.prototype ---> null
```

#### 使用构造器创建对象

在 JavaScript 中，构造器其实就是一个普通的函数。当使用 new 操作符 来作用这个函数时，它就可以被称为构造方法（构造函数）。

```
function Graph() {
  this.vertices = [];
  this.edges = [];
}

Graph.prototype = {
  addVertex: function(v){
    this.vertices.push(v);
  }
};

var g = new Graph();
// g是生成的对象,他的自身属性有'vertices'和'edges'.
// 在g被实例化时,g.__proto__指向了Graph.prototype.
```

#### 使用 Object.create 创建对象

ECMAScript 5 中引入了一个新方法：Object.create()。可以调用这个方法来创建一个新对象。新对象的原型就是调用 create 方法时传入的第一个参数：
```
var a = {a: 1}; 
// a ---> Object.prototype ---> null

var b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 (继承而来)

var c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

var d = Object.create(null);
// d ---> null
console.log(d.hasOwnProperty); // undefined, 因为d没有继承Object.prototype
```

#### 使用 class 关键字
ECMAScript6 引入了一套新的关键字用来实现 class。使用基于类语言的开发人员会对这些结构感到熟悉，但它们是不一样的。 
JavaScript 仍然是基于原型的。这些新的关键字包括 class, constructor, static, extends, 和 super.

```
"use strict";

class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }
  get area() {
    return this.height * this.width;
  }
  set sideLength(newLength) {
    this.height = newLength;
    this.width = newLength;
  }
}

var square = new Square(2);
```

#### prototype or `__proto__`

[js中__proto__和prototype的区别和关系][prototype]

那么`__proto__`是什么？每个对象都会在其内部初始化一个属性，就是`__proto__`，
当我们访问一个对象的属性 时，如果这个对象内部不存在这个属性，那么他就会去`__proto__`里找这个属性，这个`__proto__`又会有自己的`__proto__`，
于是就这样 一直找下去，也就是我们平时所说的原型链的概念。

* `prototype`显式原型, 函数在创建之后都会拥有一个名为prototype的属性，这个属性指向函数的原型对象
* `__proto__`隐式原型, 任意对象都有一个内置属性, 是不对外公开的, 是作为私有属性存在的, 具有遮蔽性
* 对象有属性__proto__,指向该对象的构造函数的原型对象。
* 方法除了有属性__proto__,还有属性prototype，prototype指向该方法的原型对象。

隐式原型指向创建这个对象的函数(constructor)的prototype

**作用**
* 显式原型的作用：用来实现基于原型的继承与属性的共享。
* 隐式原型的作用：构成原型链，同样用于实现基于原型的继承。举个例子，当我们访问obj这个对象中的x属性时，如果在obj中找不到，那么就会沿着__proto__依次查找。

#### 总结

在用原型继承编写复杂代码前理解原型继承模型十分重要。同时，还要清楚代码中原型链的长度，并在必要时结束原型链，以避免可能存在的性能问题。
此外，除非为了兼容新 JavaScript 特性，否则，永远不要扩展原生的对象原型。



