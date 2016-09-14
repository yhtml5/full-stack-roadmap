## 什么是[bower]  

**Bower是一个客户端技术的软件包管理器，它可用于搜索、安装和卸载如JavaScript、HTML、CSS之类的网络资源。其他一些建立在Bower基础之上的开发工具，如YeoMan和Grunt，这个会在以后的文章中介绍。[原文地址]**  

### 安装bower 
 
 
安装node环境:node.js

安装Git，bower从远程git仓库获取代码包:git简易指南

```
npm install -g bower

bower -h  使用help命令查看帮助
```

### 自定义包的安装目录

```
touch .bowerrc  --新建文件
```

这个.bowerrc文件是自定义bower下载的代码包的目录，比如现在我的项目结构如下图：

那我的.bowerrc文件内容如下：

```
{
  "directory" : "js/lib"
}
```

### bower初始化

```
bower init --初始化
```

会提示你输入一些基本信息，根据提示按回车或者空格即可，然后会生成一个bower.json文件，用来保存该项目的配置，如下：

```
{
  "name": "bb_boot",
  "version": "0.0.1",
  "authors": [
    "savokiss <jaynaruto@qq.com>"
  ],
  "moduleType": [
    "amd"
  ],
  "license": "MIT",
  "ignore": [
    "**/.*",
    "node_modules",
    "bower_components",
    "js/lib",
    "test",
    "tests"
  ],
  "dependencies": {
  }
}
```

### 包的安装

```
bower install jquery --save

bower install jquery#1.x

bower install jquery jquery2=jquery#2.x
```

bower就会从远程下载jquery最新版本到你的js/lib目录下
其中 --save 参数是保存配置到你的bower.json，你会发现bower.json文件已经多了一行：

```
  "dependencies": {
    "jquery": "~2.1.4"
  }
```

### 包的信息

```
bower info jquery  --查找jquery都有哪些个版本
```

### 包的更新

上面安装的是最新版的高版本jquery，假如想要兼容低版本浏览器的呢？
已经查到兼容低版本浏览器的jquery版本为1.11.3，下面直接修改bower.json文件中的jquery版本号如下：
```
  "dependencies": {
    "jquery": "~1.11.3"
  }
```

然后执行如下命令：

```
bower update
```

bower就会为你切换jquery的版本了

### 包的查找

还有一个很重要的功能，就是包的查找，比如我想要安装bootstrap的某个插件，但是记不住名字了，就可以直接在命令行输入：

```
bower search bootstrap
```
bower就会列出包含字符串bootstrap的可用包了

### 包的卸载

```
bower uninstall jquery
```

[原文地址]:https://segmentfault.com/a/1190000002971135
[bower]:https://bower.io