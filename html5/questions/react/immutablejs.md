### 数据的不可变性

React并没有那么突出不可变数据的应用，然而不变数据却是Function Program中核心，Redux则是完全基于Function Program的，
在Redux中，我们可以自己去维护函数中的数据边界，小心翼翼的创建一个不受影响的函数式编程数据模型，
也可以采用immutable这样简单的使用方式

但是我们依然需要对Javascript语言中的不变数据有个清醒的认识，才不至于出现“意外”的错误。

#### 1.Javascript中const定义的局限

如果在Javascript中定义不可变数据，我们可以采用const关键字来定义变量。使得变量不可修改，然而并非是一定的。
Javascript中的类型并不多，主要分为基本类型（number,string,boolean）,对象（Object,Function）。
虽然你都可以定义为const,但基本类型和对象的操作却是不一样的。

a.基本类型定义为const,数据不可改变：

```
const ci = 3;
const cs = 'chen';
const cb  = true;

//以下代码会抛出异常
ci = 8;
cs = 'dd';
cb=false;
```

b.对象类型定义为const,数据可以改变：

```
数据对象：
const constP = {
  name:'dd',
  age:11
}

//运行正常，不会抛出异常。
constP.name = 'ff';

数据列表：
const cl = ['t1','t2','t3'];
//运行正常，不会抛出异常
cl.push('t4');
```

#### 2.差异分析

定义const的变量确实是不可改变的，之所以会出现以上的情况是因为基本类型变量与数据对象变量存储的信息不一样。
a.基本类型变量存储的是**变量值**
b.数据对象变量存储的是**变量地址**，类似于C中的指针。

#### 3.解决方法

要解决数据的可变性，我们有多种方法，主要可以参考以下几种：

a.在function中采用immutable库实现Function Program；
b.在function中采用object.assign函数来实现数据复制；
c.当然可以采用const,只是实用范围为基本类型；
d.采用Object.freeze定义数据对象：

var freezeP = Object.freeze({
  name:'dd',
  age:11
});

//以下代码不会出现异常，但也不会产生任何效果，freezeP.name依然为’dd’.
freezeP.name = 'ff';
Function Program中不可变数据的实现方式是函数式编程的核心也是目标，使得逻辑更简单、清晰，也更易于测试，
将高内聚、低耦合的思想发挥到了极致，换句话来说，函数式编程就是：看好你自己的数据，别动别人的！


