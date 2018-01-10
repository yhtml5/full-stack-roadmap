## Vendor Prefix

* 试验一些还未成为标准的的CSS属性——也许永远不会成为标准
* 对新出现的标准的CSS3属性特征做实验性的实现
* 对CSS3中一些新属性做等效语义的个性实现

### Vendor Prefix Type

-webkit- (谷歌, Safari, 新版Opera浏览器等)
-moz- (火狐浏览器)
-o- (旧版Opera浏览器等)
-ms- (IE浏览器 和 Edge浏览器)

当需要使用浏览器引擎前缀(vendor-prefix)时，最好是把带有各种前缀的写法放在前面，然后把不带前缀的标准的写法放到最后

.myClass {
	-webkit-animation-name: fadeIn;
	-moz-animation-name: fadeIn;
	-ms-animation-name: fadeIn;
	-o-animation-name: fadeIn;
	animation-name: fadeIn;  /* 不带前缀的放到最后 */
}

总结:
* 不带前缀的标准的写法放到最后
* 特定的浏览器渲染引擎下才能识别和生效
* 一种浏览器引擎里一般不实现其它引擎前缀标识的CSS属性
* 火狐等浏览器在其移动版里也实现了部分WebKit引擎前缀的CSS属性

### Reference
[autoprefixer](https://github.com/postcss/autoprefixer)
[css之浏览器引擎前缀](http://www.cnblogs.com/sunxiaorui/p/4466847.html)
[浏览器引擎前缀](https://developer.mozilla.org/zh-CN/docs/Glossary/Vendor_Prefix)
