### [restful api][restful-api]

### get与post区别

http 协议中, 这俩种请求方式没有本质上的区别

请求的内容都可以放在body/payload/param中
请求大小也没有限制

区别来自于浏览器/服务器, 以及resetful api 风格的影响

浏览器/服务器都有规定url 的长度限制, 
服务器处理请求也是需要消耗资源的, 一个几兆的url, 成千上万次的请求, 服务器肯定受不了

resetful api 规定 get 用于请求资源, post用于发送数据

### https 的原理