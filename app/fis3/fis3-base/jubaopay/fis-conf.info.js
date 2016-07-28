/*
 * === fis3 ===
 *    fis.set设置项目属性
 *    fis.set("project.ignore", ['**', '**',]); 忽略的文件
 *    安装插件 npm install [-g] fis3-postpackager-loader
 *    fis3-postpackager-loader 分析 __RESOURCE_MAP__ 结构，来解决资源加载问题？
 *
 * === path ===
 *    "/"为绝对路径,  "./"相对当前目录， "../"上级目录
 *    $0 代表的是 match 到的整个字符串
 *    release输出相对于fis-conf.js文件的绝对定位
 *    js里的资源定位需要加上__uri() //不是__url()
 *    domain设置域名，相对路径配置"."
 *
 * === plugin ===
 *     启用打包插件，必须匹配 ::package
 *    'keepBreaks': false, //保持一个规则一个换行
 *     useSprite: true // 给匹配到的文件分配属性 `useSprite`
 *     useInlineMap: true, // 资源映射表内嵌
 *     allInOne: true, 默认 false, 配置是否合并零碎资源。
 *     isMod 标记文件为组件化文件。被标记成组件化的文件会入map.json表。并且会对js文件进行组件化包装。
 *     packOrder:用来控制合并时的顺序，值越小越在前面。配合 packTo 一起使用。默认值：0
 *     packTo:分配到这个属性的文件将会合并到这个属性配置的文件中
 *            设置的是源码路径，也会受到已经设置的 fis.match 规则的影响
 *     useSameNameRequire: 当设置开启同名依赖，模板会依赖同名css、js；js 会依赖同名 css，不需要显式引用。合并link链接
 *     expect: ['','']  不想被压缩的
 *
 *
 * === qustion ===
 *    ignore文件，如果有链接指向，或被依赖关系存在，就会重新输出；同名依赖？是否组件？
 *    不输出组件，已打包过的文件？
 *    压缩影响注释、封号结果
 *    加入依赖文件，才能打包
 *
 */
// components下的 js 调用 jswrapper 进行自动化组件化封装
fis.match('/components/**/*.js', {
    postprocessor: fis.plugin('jswrapper', {
        type: 'commonjs'
    })
});