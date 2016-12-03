## [vue-loader][vue-loader-gitbook]

### start
```
npm install -g vue-cli
vue init webpack-simple hello-vue
cd hello-vue
npm install
npm run dev # ready to go!
```

### Src Imports

If you prefer splitting up your *.vue components into multiple files, you can use the src attribute to import an external file for a language block:

```
<template src="./template.html"></template>
<style src="./style.css"></style>
<script src="./script.js"></script>
```

Beware that src imports follow the same path resolution rules to CommonJS require() calls,   
which means for relative paths you need to start with ./, and you can import resources directly from installed NPM packages, e.g:

```
<!-- import a file from the installed "todomvc-app-css" npm package -->
<style src="todomvc-app-css/index.css">
```

### scoped css
You can include both scoped and non-scoped styles in the same component:

```
<style>
/* global styles */
</style>

<style scoped>
/* local styles */
</style>
```



[vue-loader-gitbook]:https://vue-loader.vuejs.org/en/start/spec.html