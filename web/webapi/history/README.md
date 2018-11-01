# history 返回与解决方案

## 最理想的路由
- [ ] 与手机返回行为一致  
- [ ] 与微信返回前进一致  
- [ ] 尽量使用go(-1)，哪来回哪去  
- [ ] 有套路由地址: 跳转 

* back/go(-1)
* popstate/pushState
* isvUrls/sessionStorage/token  


## 问题
        
* 由浏览器默认维护的历史堆栈在某些业务场景中并不匹配
* 太多if判断, 需要增加多个标识位, 来源/是否node/是否小程序/是否商家小程序
* 与浏览器自带返回, 微信返回, 手机返回键行为不一致
* 返回不正确地址, 链路长, 返回易出错
* 循环跳转
* 不易调试, 多个工程, 增加一处来源, 改动至少俩个地方
* isv在不断更新迭代, 不断有新老业务迁入/迁出, url会不断的更新. (控制反转)
* bill 不清楚该去哪个url

路由中心
- [ ] 控制路径层级，popstate
- [ ] 返回: 微信系统返回, 关闭弹窗
- [ ] 返回: 返回正确的地址, 循环跳转
- [ ] 整理跳转地址: node/isv/原来老系统

## demo

* 组件billRevLink
* v咖 会员问题

## 实际场景

* a,b都会进入c, c根据来源返回a,b
* a进入c, c返回b, b返回a
* a进入b, b返回a, 其它情况返回c, (c具体地址由a决定)
* a进入b, b进入c, c按条件返回a/d/e (a/d/e具体地址由a决定)

## 跳转路径

* 购物车 - 账单 - 支付完成页
* 购物车 - 订单列表 - 订单详情
* 订单列表 - 订单详情 - 账单
* 订单详情 - 账单

## 解决思路

* 学习spring ioc 控制反转
* 业务方 注入依赖
* 尽可能使用history.go(-1)
* 与浏览器自带返回, 微信返回, 手机返回键行为一致
* pushState/replaceState/popState, 可能具有同源问题, 兼容性问题, 与vue-router冲突

## 参考资料

* [mdn History API](https://developer.mozilla.org/zh-CN/docs/Web/API/History_API)

    
