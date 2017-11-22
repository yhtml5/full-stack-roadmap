## protocol relative links

// 是什么含义？
//是缺省协议的写法, 例如//zhihu.com/path
缺省协议默认使用当前协议当前页面为HTTP时, 等效

http://zhihu.com/path
当前页面为HTTPS时, 等效
https://zhihu.com/path

使用 // 代替 http:// 的条件和好处？

情况: 
1. 当前页面和目标资源同时支持HTTP和HTTPS
2. 正在从http升级到https
3. http 链接在 https 页面里会报错
4. 不知道当前页面会用什么协议打开

好处: 
1. 就是能根据用户打开页面的方式自适应的选择资源的请求协议
2. 对于https页面的内容, 浏览器默认会组织非https内容, 可以避免这种情况
3. 整站https升级方便

缺点: 
1. 直接打开本地文件调试时, 使用的协议是文件协议(file://)
2. 这个时候这个协议会变成 file:///http://zhihu.com/path 显然是不存在的
3. 在app中//会解析成本地文件

总结: 
1. src, ajax, href 尽可能使用 // 


