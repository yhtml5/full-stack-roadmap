# node-sass

- [刨根问底之node-gyp](https://github.com/tsy77/blog/issues/5)
- [stackoverflow](https://stackoverflow.com/questions/14772508/npm-failed-to-install-time-with-make-not-found-error)

`linux => build-essential => make => node-gyp => node-sass`

- sass_binary_site 切到国内源

## alias

[npm install](https://docs.npmjs.com/cli/v8/commands/npm-install)

```sh
npm i node-sass@npm:dart-sass -D --registry=https://registry.npm.taobao.org
```

在Linux下，使用node-gyp调用make来编译node-sass的原生C++模块。为了优化这个过程
