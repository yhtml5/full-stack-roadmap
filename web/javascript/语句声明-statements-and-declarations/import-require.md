### CommonJS 中的 require/exports 和 ES6 中的 import/export 区别
ES6 模块的设计思想，是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量
export 命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。
ES6模块不是对象，而是通过export命令显示指定输出代码，再通过import输入
这是很多的静态分析的前提, 比如 webpack 的 treeShark, 将没被导入的代码段整合通过`uglyjs`删除

Require是CommonJS的语法，CommonJS的模块是对象，输入时必须查找对象属性。
CommonJS 规范规定，每个模块内部，module 变量代表当前模块。这个变量是一个对象，它的 exports 属性（即 module.exports ）是对外的接口。加载某个模块，其实是加载该模块的 module.exports 属性。
CommonJS 模块的重要特性是加载时执行，即脚本代码在 require 的时候，就会全部执行。
一旦出现某个模块被”循环加载”，就只输出已经执行的部分，还未执行的部分不会输出。
nodejs中目前只能使用`commonjs`规范

import和export命令只能在模块的顶层，不能在代码块之中。否则会语法报错
require 可以在使用到的时候引入
import 默认使用严格模式
'use strict';

import()
require.ensure

```export
export  default a
export  {b}

"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = a;
exports.b = b;
```

```import
import a, {b} from 'a'

"use strict";
var _a = require("a");
var _a2 = _interopRequireDefault(_a);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
```
