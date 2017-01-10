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

> npm install npm -g  |update npm itself

### NPM
|command|usage|
|---|---|
|npm -v|显示版本，检查npm 是否正确安装|
|npm install modules|安装模块,参数: -g, --save, --save-dev, --production|
|npm list|列出已安装模块|
|npm run|list all scripts|
|npm run dev|do something|
|npm show modules|显示模块详情|
|npm show webpack versions --json|显示模块版本信息|
|npm update|升级当前目录下的项目的所有模块|
|npm update modules|升级当前目录下的项目的指定模块|
|npm update modules -g|升级全局安装的express模块|
|npm uninstall modules|删除指定的模块|
|n|node版本管理|
|n stable|升级Node到最新稳定版|
|n 7.0|升级Node指定版本|

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

[npm-script-ruan]:http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html