### 跨域问题及其解决方式

**[同源策略与JS跨域][cross-domain]**

浏览器同源策略: 同域名,同端口,同协议
> 协议或者端口的不同，只能通过后台来解决

#### 同源策略的限制
1. Cookie、LocalStorage和IndexDB无法读取。
2. DOM无法获得。
3. AJAX请求不能发送。

#### 如何跨域
* document.domain 
 1. 两个域只是子域不同
 2. 只适用于iframe窗口与父窗口之间互相获取cookie和DOM节点，不能突破LocalStorage和IndexDB的限制。
* window.name
 1. window.name容量很大，可以放置非常长的字符串
 2. 必须监听子窗口window.name属性的变化，影响网页性能
* window.postMessage

#### ajax/fetch跨域

##### jsonp

先在网页上添加一个script标签，设置这个script标签的src属性用于向服务器请求JSON数据，
需要注意的是，src属性的查询字符串一定要加一个callback函数，用来指定回调函数的名字 。

而这个函数是在资源加载之前就已经在前端定义好的，这个函数接受一个参数并利用这个参数做一些事情。
向服务器请求后，服务器会将JSON数据放在一个指定名字的回调函数里作为其参数传回来。
这时，因为函数已经在前端定义好了，所以会直接调用。

**特点:**
 1. 可以是两个完全不同源的域
 2. 只支持HTTP请求中的GET方式
 3. 老式浏览器全部支持
 4. 需要服务端支持
 5. 前后端强制耦合, 协作上多了一层沟通
 6. 判断请求成功失败比较棘手, 可以设置响应时间

**例子:**
```
function addScriptTag(src) {
    var script = document.createElement('script')
    script.setAttribute("type","text/javascript")
    script.src = src
    document.body.appendChild(script)
}

window.onload = function () {
    addScriptTag('http://example.com/ip?callback=foo');//请求服务器数据并规定回调函数为foo
}

function foo(data) {
    console.log('Your public IP address is: ' + data.ip)
}

foo({
    "ip": "8.8.8.8"
});
```

##### 网络代理
可以在服务器端设置一个代理，由服务器端向跨域下的网站发出请求，再将请求结果返回给前端

```
$(document).ready(function(){
    $.getJSON("http://query.yahooapis.com/v1/public/yql?callback=?", { //yahoo提供的jsonp代理  
    q: "select * from json where url='www.cainiu.com/adminstock/appVersion/158/appVersions?page=1&rows=20'" ,
    format: "json" 
        }, function(data) {   
            if (data.query.results) {  
                var result = JSON.stringify(data.query.results); 
                var obj = eval('('+result+')'); 
                var rowsLen = obj.json.rows.length;
                
                for (var i=0; i < rowsLen; i++) {
                    var version=obj.json.rows[i].appDesc
                    var appDesc=obj.json.rows[i].appDesc.split('\r\n')
                    for(j=0;j<appDesc.length;j++){
                        $(".ol"+i).append("<li>"+appDesc[j]+"</li>")
                    }
                   $(".appVersion"+i).html("<h2>"+obj.json.rows[i].createDate.substring(0,10)+"</h2>"+"<br>"+"版本号："+obj.json.rows[i].appVersion)
                   //class循环                                                         访问json行里的变量，截取字符串长度  
                  }} else {   
                alert("未能获取到信息请稍候再试！");//或者写你的其他逻辑，比如重新加载啥的。
            }   
        });   
  });
```

##### 通过CORS跨域 (Cross-Origin Resource Sharing)

CORS (跨域资源共享)是一个系统, 包括传输的 HTTP headers, 
其确定是否阻止或完成从该资源所在的域外的另一个域的网页上的受限资源的请求

同源安全策略( same-origin security policy)默认禁止“跨域”请求. 
CORS 给予Web服务器跨域访问控制, 启用安全的跨域数据传输

浏览器将CORS请求分成两类：简单请求（simple request）和非简单请求（not-so-simple request）

1. 请求方法是以下三种方法之一: HEAD/GET/POST
2. HTTP的头信息不超出以下几种字段：
  * Accept
  * Acept-Language
  * Content-Language
  * Last-Event-ID
  * Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain
3. 预检请求, option请求

```
Access-Control-Allow-Origin: http://api.bob.com
Access-Control-Allow-Credentials: true
Access-Control-Expose-Headers: FooBar
```


**特点:**
1. 可以是两个完全不同源的域
2. 支持所有类型的HTTP请求
3. 被绝大多数现代浏览器支持，老式浏览器不支持
4. 需要服务端支持

**note**
1. 注意过滤option请求

##### web sockets

##### 反向代理

可以在 反向代理服务器nginx 或 由nginx转发到内网服务器中处理(nodejs)

```
server{
    listen8000;
    location/ {
        includeuwsgi_params;
        uwsgi_passunix:/tmp/testFlask2.sock;
    }
    location/partners {
        rewrite^.+partners/?(.*)$ /$1 break;
        includeuwsgi_params;
        uwsgi_passunix:/tmp/testFlask1.sock;
    }
}
```
```
var http = require('http')
  ,httpProxy = require('http-proxy')  //http-proxy
  ,proxy = httpProxy.createProxyServer({xfwd:true})
  ,fs = require('fs')
  ,path = require('path');
var express = require('express');
var app = express();

var getConType = function(ext){
    var contentType = '';
    switch(ext){
    case ".html":
    contentType= "text/html";
    break;
    case ".js":
    contentType="text/javascript";
    break;
    case ".css":
    contentType="text/css";
    break;
    case ".gif":
    contentType="image/gif";
    break;
    case ".jpg":
    contentType="image/jpeg";
    break;
    case ".png":
    contentType="image/png";
    break;
    case ".ico":
    contentType="image/icon";
    break;
    default:
    contentType="application/octet-stream";
}
    return contentType;
};

function getLanjie(_url){
    return _url.indexOf('.action')===-1&&_url.indexOf('.jpeg')===-1&&_url.indexOf('.JPG')===-1&&_url.indexOf('.xlsx')===-1&&_url.indexOf('.pdf')===-1&&_url.indexOf('.jpg')===-1&&_url.indexOf('.jsp')===-1;
}

var cookie = "";
app.use(function(req, res) {
    var _url = req.url //获取请求的url
    ,_file
    ,_localPath
    ,_localFile
    ,_ext
    ,_stream
    ;
//判断文件转化
  if(getLanjie(_url)){
    _file = _url.replace(/\?.*/ig,'');
    _ext = path.extname(_file); // 文件扩展
    //转换成本地路径
    _localPath = __dirname+'/dcscloud2/WebRoot';;
    _localFile = _localPath+_file;
    //判断文件是否存在
    if(fs.existsSync(_localFile)){//如果文件存在
    res.sendfile(_localFile);
  } else { //返回404错误
  res.status(404).send("<h1>404 Not Found</h1>");
  }
  }else{
    proxy.web(req, res, { target: 'http://127.0.0.1:8080/dcscloud' });
  }
  });

  proxy.on('proxyReq', function (proxyReq, req, res) {
    req.headers.cookie = cookie + req.headers.cookie
    proxyReq._headers = req.headers;
    return req;
  });

  proxy.on('error', function (proxyReq, req, res) {
    res.send("<h1>404 Not Found</h1>");
  });

  proxy.on('proxyRes', function (proxyRes, req, res) {
    var JSESSIONID = proxyRes.headers['set-cookie'];

  if(JSESSIONID){
    cookie = JSESSIONID;
    res.setHeader('Set-Cookie',proxyRes.headers['set-cookie']);
}
});

console.log("服务已经启动！")
app.listen(80);
```

**特点:**
1. 告诉浏览器, 我是同源的
2. 向真正的api服务器请求数据, 并返回
3. 不需要改变目标源服务器配置
4. 不需要改变客户端的请求方式

总结: 

在有自己服务器做中间层情况下使用反向代理/CORS(跨域资源共享)
在无权改变目标服务器, 又没有自己服务器做中间层, 使用jsonp/网络代理等方式

[cross-domain]:https://segmentfault.com/a/1190000009624849?utm_source=75teamweekly&utm_medium=referral
