### setTimeout

#### 清除定时
```
var timeoutID;

function delayedAlert() {
  timeoutID = window.setTimeout(slowAlert, 2000);
}

function slowAlert() {
  alert('That was really slow!');
}

function clearAlert() {
  window.clearTimeout(timeoutID);
}
```

#### this
当你向 setTimeout() (或者其他函数)传递一个函数时,该函数中的this会指向一个错误的值.这个问题在 JavaScript reference 中进行了详细解释.

由setTimeout()调用的代码运行在与所在函数完全分离的执行环境上。这会导致，这些代码中包含的 this 关键字在非严格模式会指向 window (或全局)对象，严格模式下为 undefined，这和所期望的this的值是不一样的。

myArray.myMethod函数传递给 setTimeout，到了定时时间，this没有指向，默认指向window对象。并且没有方法把 thisArg 传递给setTimeout，正如Array方法的forEach，reduce等。下面的例子表示使用call方法也没用。