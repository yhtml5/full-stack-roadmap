### npm script

#### 传参

```
"lint": "jshint **.js",
"lint:checkstyle": "npm run lint -- --reporter checkstyle > checkstyle.xml"
```

#### 执行顺序
并行执行 &
继发执行 &&

### 默认值

```
"start": "node server.js"，
"install": "node-gyp rebuild"
```

上面代码中，npm run start的默认值是node server.js，前提是项目根目录下有server.js这个脚本；
npm run install的默认值是node-gyp rebuild，前提是项目根目录下有binding.gyp文件。

### hook

npm 脚本有pre和post两个钩子 

```
"prebuild": "echo I run before the build script",
"build": "cross-env NODE_ENV=production webpack",
"postbuild": "echo I run after the build script"
```

用户执行npm run build的时候，会自动按照下面的顺序执行。

> npm run prebuild && npm run build && npm run postbuild

因此，可以在这两个钩子里面，完成一些准备工作和清理工作。下面是一个例子。

```
"clean": "rimraf ./dist && mkdir dist",
"prebuild": "npm run clean",
"build": "cross-env NODE_ENV=production webpack"
```

npm 默认提供下面这些钩子。  
```
prepublish，postpublish
preinstall，postinstall
preuninstall，postuninstall
preversion，postversion
pretest，posttest
prestop，poststop
prestart，poststart
prerestart，postrestart
```



