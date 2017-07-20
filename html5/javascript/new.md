### [new operator][new]

#### new constructor[([arguments])]

当代码 new foo(...) 执行时：

* 一个新对象被创建。它继承自foo.prototype.
* 构造函数 foo 被执行。执行的时候，相应的传参会被传入，同时上下文(this)会被指定为这个新实例。new foo 等同于 new foo(), 只能用在不传递任何参数的情况。
* 如果构造函数返回了一个“对象”，那么这个对象会取代整个new出来的结果。如果构造函数没有返回对象，那么new出来的结果为步骤1创建的对象，
* 一般情况下构造函数不返回任何值，不过用户如果想覆盖这个返回值，可以自己选择返回一个普通对象来覆盖。当然，返回数组也会覆盖，因为数组也是对象。

```
function Car() {}
  car1 = new Car()
  console.log(car1.color)           // undefined
  Car.prototype.color = null
  console.log(car1.color)           // null
  car1.color = "black"
  console.log(car1.color)   
```

#### 对象类型和对象实例

创建了一个mycar这个对象实例，给它赋予了3个属性，现在mycar.make等于"Eagle" 以此类推。

```
function car(make, model, year) {
   this.make = make;
   this.model = model;
   this.year = year;
}
var mycar = new car("Eagle", "Talon TSi", 1993);
```

#### 对象属性为自身或其他对象

```
function person(name, age, sex) {
   this.name = name;
   this.age = age;
   this.sex = sex;
}

var rand = new person("Rand McNally", 33, "M");
var ken = new person("Ken Jones", 39, "M");

function car(make, model, year, owner) {
   this.make = make;
   this.model = model;
   this.year = year;
   this.owner = owner;
}

var car1 = new car("Eagle", "Talon TSi", 1993, rand);
var car2 = new car("Nissan", "300ZX", 1992, ken);

car2.owner.name
```


[new]:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new


