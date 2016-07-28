fis.set('project.ignore', ['output/**', 'node_modules/**', '.git/**', '.svn/**']);
// FIS 中前端模板推荐预编译为 js，所以应该使用 js 的内置语法
fis.match('*.tmpl', {
    isJsLike: true
});
fis.match('*.sass', {
    isCssLike: true
});
fis.match('*.xxhtml', {
    isHtmlLike: true
})
fis.match('*.{js,css,png,gif}', {
    useHash: true // 开启 md5 戳
});
fis.match('**.js', { // 所有的 js
    release: '/static/js$0' //发布到/static/js/xxx目录下
});
fis.match('**.css', { // 所有的 css
    release: '/static/css$0' //发布到/static/css/xxx目录下
});
fis.match('/images/(*.{png,gif})', { // 所有image目录下的.png，.gif文件
    release: '/static/pic/$1$2' //发布到/static/pic/xxx目录下
});
fis.match('/images/(*.{png,gif})', {
    //发布到/static/pic/xxx目录下
    release: '/static/pic/$1'
});
// less、sass、tmpl处理
fis.match('**.less', {
    parser: fis.plugin('less'), // invoke `fis-parser-less`,
    rExt: '.css'
});
fis.match('**.sass', {
    parser: fis.plugin('sass'), // invoke `fis-parser-sass`,
    rExt: '.css'
});
fis.match('**.tmpl', {
    parser: fis.plugin('utc'), // invoke `fis-parser-utc`
    isJsLike: true
});
// 声明依赖
var html = "<!--" +
    "@require demo.js" +
    "@require 'demo.css'" +
    "-->"
fis.match('*.html', {
    useMap: true // 配置 useMap 让HTML文件加入 manifest.json
});
// 基于整个项目打包
fis.match('::package', {
    postpackager: fis.plugin('loader')
});
fis.match('*.less', {
    parser: fis.plugin('less'),
    rExt: '.css'
});
fis.match('*.{less,css}', {
    packTo: '/static/aio.css'
});
fis.match('*.js', {
    packTo: '/static/aio.js'
});

// ====== 优化 ======
// base64
var base64 = '<img title="百度logo" src="images/logo.gif?__inline"/>';
var result = '<img title="百度logo" src="data:image/gif;base64,RGBA85eoYgAgA7"/>';
// 内联style、script、html
var style = '<link rel="stylesheet" type="text/css" href="demo.css?__inline">' +
    '<script type="text/javascript" src="demo.js?__inline"></script>';
var result = '<style>img { border: 5px solid #ccc; }</style>' +
    '<script type="text/javascript">console.log("inline file");</script>';
var link = '<link rel="import" href="demo.html?__inline">';
var result = '<h1>demo.html content</h1>';
var link = '<link rel="import" href="demo.html?__inline">';
var result = '<h1>demo.html content</h1>';
// __uri()
var img = __uri('images/logo.gif');
var result = '/images/logo_74e5229.gif';
var css = __uri('demo.css');
var result = '/demo_7defa41.css';
var js = __uri('demo.js');
var result = '/demo_33c5143.js';

// ====== demo ======
// 所有的文件产出到 static/ 目录下
fis.match('*', {
    release: '/static/$0'
});
// 所有模板放到 tempalte 目录下
fis.match('*.html', {
    release: '/template/$0'
});
// widget源码目录下的资源被标注为组件
fis.match('/widget/**/*', {
    isMod: true
});
// widget下的 js 调用 jswrapper 进行自动化组件化封装
fis.match('/widget/**/*.js', {
    postprocessor: fis.plugin('jswrapper', {
        type: 'commonjs'
    })
});
// test 目录下的原封不动产出到 test 目录下
fis.match('/test/**/*', {
    release: '$0'
});
// optimize
fis.media('prod')
    .match('*.js', {
        optimizer: fis.plugin('uglify-js', {
            mangle: {
                expect: ['require', 'define', 'some string'] //不想被压的
            }
        })
    })
    .match('*.css', {
        optimizer: fis.plugin('clean-css', {
            'keepBreaks': true //保持一个规则一个换行
        })
    });
// pack
fis.media('prod')
    // 启用打包插件，必须匹配 ::package
    .match('::package', {
        packager: fis.plugin('map'),
        spriter: fis.plugin('csssprites', {
            layout: 'matrix',
            margin: '15'
        })
    })
    .match('*.js', {
        packTo: '/static/all_others.js'
    })
    .match('*.css', {
        packTo: '/staitc/all_others.css'
    })
    .match('/widget/**/*.js', {
        packTo: '/static/all_comp.js'
    })
    .match('/widget/**/*.css', {
        packTo: '/static/all_comp.css'
    });