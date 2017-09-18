## NPM Tutorial

[npm scripts 使用指南][npm-script-ruan]

### Command Lind

#### 1. use Taobao cnpm
> npm install -g cnpm --registry=https://registry.npm.taobao.org

#### 2. change registry

Edit ~/.npmrc and add :

````
registry=https://registry.npm.taobao.org
init.license=MIT
init.author.email=1417376255@qq.com
init.author.name=yhtml5
````

#### 3. 临时配置。

npm install grunt --registry=http://registry.npm.taobao.org

> npm install npm -g  |update npm itself

### NPM 
command|usage
---|---
npm -v | 显示版本，检查npm 是否正确安装
npm config ls | 查看部分配置信息
npm config ls -l | 查看所有配置信息
npm run | list all scripts
npm run dev | do something
npm root | 本地的依赖包的绝对目录
npm root -g | 全局的依赖包的绝对目录
npm search `<package-name>` | 搜索依赖包
npm view `<package-name>` | 查看依赖包的package.json信息
npm view `<package-name>` dependencies | 单独查看package.json某个配置
npm show modules | 显示模块详情
npm show webpack versions --json | 显示模块版本信息
npm update | 升级当前目录下的项目的所有模块
npm update modules | 升级当前目录下的项目的指定模块
npm uninstall `<package-name>` | 删除指定的模块
npm list | 列出已安装模块
npm ls --depth 0 | 删除全局模块
npm test | npm t
npm install modules | npm i
npm version | 查看版本
npm version patch | 升级小版本
npm version minor | 升级中版本
npm version major | 升级大版本
npm publish | publish npm packages
npm unpublish --force | unpublish npm packages
npm login | login
npm login --registry http://127.0.0.1 | login 127.0.0.1
npm logout | logout
npm set @scope:registry=http://127.0.0.1 | set scope
npm adduser --registry http://127.0.0.1 | add user

--global | -g
--save | -S
--save-dev | -D
--save-pro | -P
n | node版本管理
n stable | 升级
n 7.0 | 升级Nod

### npm develop

```
package.json 

"bin": {
    "yhtml5-cli": "./bin/yhtml5"
  },
```
npm link 
npm version patch 
npm publish

### Semantic Versioning

npm 采用语义版本管理软件包。所谓语义版本，就是指版本号为a.b.c的形式，其中a是大版本号，b是小版本号，c是补丁号。

一个软件发布的时候，默认就是1.0.0版。如果以后发布补丁，就增加最后一位数字，比如1.0.1；
如果增加新功能，且不影响原有的功能，就增加中间的数字（即小版本号），比如1.1.0；
如果引入的变化，破坏了向后兼容性，就增加第一位数字（即大版本号），比如2.0.0。

npm 允许使用特殊符号，指定所要使用的版本范围，假定当前版本是1.0.4

* 只接受补丁包：1.0 或者 1.0.x 或者 ~1.0.4
* 只接受小版本和补丁包：1 或者 1.x 或者 ^1.0.4
* 接受所有更新：* or x

demo:

```
~2.2.1   接受2.2.1，不接受2.3.0
^2.2.1   接受2.2.1和2.3.0
~2.2     接受2.2.0和2.2.1，不接受2.3.0
^2.2     接受2.2.0、2.2.1和2.3.0
~2       接受2.0.0、2.1.0、2.2.0、2.2.1和2.3.0
^2       接受2.0.0、2.1.0、2.2.0、2.2.1和2.3.0
```

还可以使用数学运算符（比如>, <, =, >= or <=等），指定版本范围
```
>2.1
1.0.0 - 1.2.0
>1.0.0-alpha
>=1.0.0-rc.0 <1.0.1
^2 <2.2 || > 2.3
```
注意，如果使用连字号，它的两端必须有空格。如果不带空格，会被 npm 理解成预发布的 tag，比如1.0.0-rc.1。

### 目录和包查找原则

比如有如下的模块路径： 查找规则是沿路径向上逐级递归，直到根目录的node_modules目录:
```
├─/node_modules/
└─/home/node_modules/
└─/user/test/node_modules/
```
这就是自定义模块加载速度最慢的原因了。

当我们require 的标识符 不包含扩展名node 会按照 .js .json .node 的次序补足扩展名 ，依次尝试。
如果在require过程中，没有查找到对应文件，却得到一个目录，此时 node 会将当前目录当作一个包来处理。

此时，node 会查找目录下的package.json文件，通过JSON.parse() 解析包描述对象，从中拿到main属性指定的文件名进行定位
如果main属性指定错误，或者没有package.json文件，那么node会将index作为默认的文件名，去依次查找index.js , index.json , index.node
在目录分析中没有定位到任何模块，那么它会遍历自己的上一级目录进行查找，如果还没找到，抛出查找失败的异常。

### npm 发布

1. 注册一个registry帐号， npm adduser ，然后根据引导输入帐号、密码和邮箱地址。
2. 登录registry帐号， npm login ，登录信息会保存在客户端。
3. 发布项目， npm publish 。（建议发布版本从1.0.0开始）
4. 默认不带.npmignore文件，若项目中带.gitignore则使用.gitignore文件内容的配置项；
5. 若带.npmignore文件则不使用.gitignore文件中的配置项；
6. 即使配置.npmignore文件，也无法排除package.json和README.*文件；
7. NPM内置设定以下文件必须被排除

```
.*.swp
.*.swp
._*
.DS_Store
.git
.hg
.lock-wscript
.svn
.wafpickle-*
CVS
npm-debug.log
```

如果登录不成功，
通过 npm config ls 查看是否使用了非 npmjs.org 官网的 registry

暂时切回官方源地址
> npm config set registry https://registry.npmjs.org/

[npm-script-ruan]:http://www.ruanyifeng.com/blog/2016/10/npm_scripts.htmls
[shorthands-and-other-cli-niceties]:https://docs.npmjs.com/misc/config#shorthands-and-other-cli-niceties


