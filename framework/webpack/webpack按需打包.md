## webpack按需打包

* 分析依赖包大小 => 如何按需打包 => 例子

node_module 中的模块往往是转义成es5的, 引入会全量引入,
以lodash为例

> import { find } from 'lodash'

如果要按需打包，我们可以选用的手段有:

### 函数模块
类似 Lodash 中的每个函数在 NPM 都有一个单独的发布模块。NPM: results for ‘lodash’
假如你只需要使用_.isEqual，那么你只需要安装lodash.isequal模块，然后按以下方式引用。

```
var isEqual = require('lodash.isequal')
// or ES6
import isEqual from 'lodash.isequal'
isEqual([1, 2, 3], [1, 2, 3]) // true
```
> 管理的包增多, 依赖升级频繁

### 全路径引用
```
var difference = require('lodash/difference')
// or ES6
import difference from 'lodash/difference'
difference([1, 2], [1, 3])  // [2]
```

> 要注意引入的包的依赖关系, 是否要引入其它文件

### 使用插件优化
antd

lodash-webpack-plugin

> 需要改变打包方式

### treeShark

> 可能80%的treeshark不会生效

使用es6输出

```
// export { find }
import { find } from 'lodash'
```

can't treeShake
```
// const { square, cube } = require('./features/treeShake');
// import treeShake from './features/treeShake';
// treeShake.cube(6)
```

> 需要增加 对node_module/utils的 babel转义, 否则会报错
> 耗费打包时间, [webpack treeshark分析, babel 转义, uglifyjs 压缩]

### rollup



