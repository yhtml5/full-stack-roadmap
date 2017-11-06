### 闭包与作用域

#### 作用域

没有块作用域：即作用域不是以{}包围的，其作用域完成由函数来决定，因而if / for等语句中的花括号不是独立的作用域

如前述，JS的在函数中定义的局部变量只对这个函数内部可见，称之谓函数作用域

* 嵌套作用域变量搜索规则：当在函数中引用一个变量时，JS会搜索当前函数作用域，如果没有找到则搜索其上层作用域，一直到全局作用域
* 词法作用域规则：函数的嵌套关系是定义时决定的，而非调用时决定的，即词法作用域，即嵌套关系是由词法分析时确定的，而非运行时决定
* 对于这两个规则的相互作用，函数内无论什么位置定义的局部变量，在进入函数时都是已经定义的，但未初始化，即为undefined，直到运行到变量被赋值时才被初始化，因此若访问了未初始化的变量，我们会得到undefined的说明
* 全局作用域的变量是全局对象的属性，不论在什么函数中都可以直接访问，而不需要通过全局对象，但加上全局对象，可以提供搜索效率。
* 满足下列条件的变量属于全局作用域：在最外层定义的变量/全局对象的属性/任何地方隐匿定义的变量。

#### 词法作用域

```
function init() {
  let name = "Mozilla"; 
  // name 是一个被init创建的局部变量
  function displayName() { 
  // displayName() 是一个内部函数,
      alert(name); 
      //  一个闭包使用在父函数中声明的变量
  } 
  displayName();
}
init();
```

在 JavaScript 中，变量的作用域是由它在源代码中所处位置决定的（显然如此），并且嵌套的函数可以访问到其外层作用域中声明的变量。

#### [闭包][closures]

闭包是一种特殊的对象。它由两部分构成：函数，以及创建该函数的环境
环境由闭包创建时在作用域中的任何局部变量组成

Closures (闭包)是使用被作用域封闭的变量，函数，闭包等执行的一个函数的作用域。
通常我们用和其相应的函数来指代这些作用域。(可以访问独立数据的函数)

闭包是指这样的作用域，它包含有一个函数，这个函数可以调用被这个作用域所**封闭**的变量、函数或者闭包等内容。通常我们通过闭包所对应的函数来获得对闭包的访问。

1. 闭包最常用的方式就是返回一个内联函数（何为内联函数？就是在函数内部声明的函数）；
2. 在JavaScript中有作用域和执行环境的问题，在函数内部的变量在函数外部是无法访问的，在函数内部却可以得到全局变量。由于种种原因，我们有时候需要得到函数内部的变量，可是用常规方法是得不到的，这时我们就可以创建一个闭包，用来在外部访问这个变量。
3. 闭包的用途 主要就是上一点提到的读取函数内部变量，还有一个作用就是可以使这些变量一直保存在内存中。
4. 使用闭包要注意，由于变量被保存在内存中，所以会对内存造成消耗，所以不能滥用闭包。解决方法是 在退出函数之前，将不使用的局部变量全部删除。


**demo1:**
myFunc 是一个闭包，由 displayName 函数和闭包创建时存在的 "Mozilla" 字符串形成。

```
function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
```

**demo2:**

从本质上讲，makeAdder 是一个函数工厂: 创建将指定的值和它的参数求和的函数，
在上面的示例中，我们使用函数工厂创建了两个新函数: 一个将其参数和 5 求和，另一个和 10 求和。

add5 和 add10 都是闭包。它们共享相同的函数定义，但是保存了不同的环境。
在 add5 的环境中，x 为 5。而在 add10 中，x 则为 10。

```
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12
```

**作用**
1. 闭包允许将函数与其所操作的某些数据（环境）关连起来; 大部分我们所写的 Web JavaScript 代码都是事件驱动的: 定义某种行为，然后将其添加到用户触发的事件之上（比如点击或者按键）
2. 模拟私有方法。私有方法不仅仅有利于限制对代码的访问,隐藏对象的私有函数和变量,还提供了管理全局命名空间的强大能力，避免非核心的方法弄乱了代码的公共接口部分。

```
var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }  
};

var Counter1 = makeCounter();
var Counter2 = makeCounter();
console.log(Counter1.value()); /* logs 0 */
Counter1.increment();
Counter1.increment();
console.log(Counter1.value()); /* logs 2 */
Counter1.decrement();
console.log(Counter1.value()); /* logs 1 */
console.log(Counter2.value()); /* logs 0 */
```

**错误**
在 JavaScript 1.7 引入 let 关键字 之前，闭包的一个常见的问题发生于在循环中创建闭包

```
function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = function() {
      showHelp(item.help);
    }
  }
}

setupHelp();
```

该问题的原因在于赋给 onfocus是闭包（setupHelp）中的匿名函数而不是闭包对象；在闭包（setupHelp）中一共创建了三个匿名函数，但是它们都共享同一个环境（item）。在 onfocus 的回调被执行时，循环早已经完成，且此时 item 变量（由所有三个闭包所共享）已经指向了 helpText 列表中的最后一项。

解决这个问题的一种方案是使onfocus指向一个新的闭包对象。

```
function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function makeHelpCallback(help) {
  return function() {
    showHelp(help);
  };
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
  }
}

setupHelp();
```

所有的回调不再共享同一个环境， makeHelpCallback 函数为每一个回调创建一个新的环境。在这些环境中，help 指向 helpText 数组中对应的字符串。

**性能考量**
```
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
  this.getName = function() {
    return this.name;
  };

  this.getMessage = function() {
    return this.message;
  };
}
```
上面的代码并未利用到闭包的益处，因此，应该修改为如下常规形式：
```
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype = {
  getName: function() {
    return this.name;
  },
  getMessage: function() {
    return this.message;
  }
};
```
```
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype.getName = function() {
  return this.name;
};
MyObject.prototype.getMessage = function() {
  return this.message;
};
```
```
function MyObject(name, message) {
    this.name = name.toString();
    this.message = message.toString();
}
(function() {
    this.getName = function() {
        return this.name;
    };
    this.getMessage = function() {
        return this.message;
    };
}).call(MyObject.prototype);
```
在前面的三个示例中，继承的原型可以为所有对象共享，且不必在每一次创建对象时定义方法


**循环与闭包**

```
for(var i=1; i<=5; i++){
    setTimeout(function timer(){
        console.log(i);
    }, i*1000);
}
// 期望：每秒一次的频率输出0~5
// 结果：每秒一次的频率输出五次6
```

```
for(var i=0; i<=5; i++){
    (function(j){
        setTimeout(function timer(){
            console.log(j);
        }, j*1000 );
    })(i);
}
// 结果：每秒一次的频率输出0~5
```

```
for(let i=0; i<=5; i++){
    setTimeout(function timer(){
        console.log(i);
    }, i*1000 );
}
// 结果：每秒一次的频率输出0~5
```
