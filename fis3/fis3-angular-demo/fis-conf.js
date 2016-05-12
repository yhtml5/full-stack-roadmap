//由于使用了bower，有很多非必须资源。通过set project.files对象指定需要编译的文件夹和引用的资源
fis.set('project.files', ['page/**', 'map.json', 'modules/**', 'lib']);

fis.set('statics', '/statics'); //static目录

//FIS modjs模块化方案，您也可以选择amd/commonjs等
fis.hook('module', {
    mode: 'mod'
});

/*************************目录规范*****************************/
fis.match("**/*", {
        release: '${statics}/$&'
    })
    //modules下面都是模块化资源
    .match(/^\/modules\/(.*)\.(js)$/i, {
        isMod: true,
        id: '$1', //id支持简写，去掉modules和.js后缀中间的部分
        release: '${statics}/$&'
    })
    //page下面的页面发布时去掉page文件夹
    .match(/^\/page\/(.*)$/i, {
        useCache: false,
        release: '$1'
    })
    //一级同名组件，可以引用短路径，比如modules/jquery/juqery.js
    //直接引用为var $ = require('jquery');
    .match(/^\/modules\/([^\/]+)\/\1\.(js)$/i, {
        id: '$1'
    })
    //less的mixin文件无需发布
    .match(/^(.*)mixin\.less$/i, {
        release: false
    })
    //前端模板,当做类js文件处理，可以识别__inline, __uri等资源定位标识
    .match("**/*.tmpl", {
        isJsLike: true,
        release: false
    })
    //页面模板不用编译缓存
    .match(/.*\.(html|jsp|tpl|vm|htm|asp|aspx|php)$/, {
        useCache: false
    })



/****************异构语言编译*****************/
//less的编译
//npm install [-g] fis-parser-less
fis.match('**/*.less', {
    rExt: '.css', // from .scss to .css
    parser: fis.plugin('less', {
        //fis-parser-less option
    })
});



//打包与css sprite基础配置
fis.match('::packager', {
    // npm install [-g] fis3-postpackager-loader
    // 分析 __RESOURCE_MAP__ 结构，来解决资源加载问题
    postpackager: fis.plugin('loader', {
        resourceType: 'mod',
        useInlineMap: true // 资源映射表内嵌
    }),
    packager: fis.plugin('map'),
    spriter: fis.plugin('csssprites', {
        layout: 'matrix',
        margin: '15'
    })
})



/**********************生产环境下CSS、JS压缩合并*****************/
//使用方法 fis3 release prod
fis.media('prod')
    //注意压缩时.async.js文件是异步加载的，不能直接用annotate解析
    .match('**.js', {
        preprocessor: fis.plugin('annotate'),
        optimizer: fis.plugin('uglify-js')
    })
    .match('/**(.async).js', {
        preprocessor: null,
        optimizer: null
    })
    .match('**.css', {
        optimizer: fis.plugin('clean-css')
    })
    .match("lib/mod.js", {
        packTo: "/pkg/vendor.js"
    })
    //所有页面中引用到的bower js资源
    .match("bower_components/**/*.js", {
        packTo: "/pkg/vendor.js"
    })
    //所有页面中引用到的bower css资源
    .match("bower_components/**/*.css", {
        packTo: "/pkg/vendor.css"
    });