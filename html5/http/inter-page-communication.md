### 页面间通信

无跨域情况下:

* Cookie/LocalStorage/sessionStorage/IndexDB

跨域情况下: 

* document.domain 
 1. 两个域只是子域不同
 2. 只适用于iframe窗口与父窗口之间互相获取cookie和DOM节点，不能突破LocalStorage和IndexDB的限制。
* window.name
 1. window.name容量很大，可以放置非常长的字符串
 2. 必须监听子窗口window.name属性的变化，影响网页性能
* window.postMessage

通用: 
* url 参数
* 服务器存入参数