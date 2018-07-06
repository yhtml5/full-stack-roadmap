### use strict
消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为

* 不允许创建意外的全局变量 | a = 1
* 不能使用保留字 | let/static
* 不能删除对变量/函数 | var a = 1 ; delete a
* 对象不能使用重名属性, 不能为只读属性赋值
* 函数不允许使用重名参数, 修改参数不会反映到arguments
* eval() 不会在包含的上下文中创建变量或函数
* 抑制this, 禁止this关键字指向全局对象 | var color = 'red'; function a () {alert(this,color)}; a.call(null)
