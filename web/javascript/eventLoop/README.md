## Event Loop

### 单线程
JS引擎中负责解释和执行JavaScript代码的线程只有一个, 不妨叫它主线程

但是实际上还存在其他的线程。例如：处理AJAX请求的线程、处理DOM事件的线程、定时器线程、读写文件的线程(例如在Node.js中)等等。这些线程可能存在于JS引擎之内，也可能存在于JS引擎之外，在此我们不做区分。不妨叫它们工作线程。

工作线程是生产者，主线程是消费者(只有一个消费者)。工作线程执行异步任务，执行完成后把对应的回调函数封装成一条消息放到消息队列中；主线程不断地从消息队列中取消息并执行，当消息队列空时主线程阻塞，直到消息队列再次非空。

异步函数实际上很快就调用完成了。但是后面还有工作线程执行异步任务、通知主线程、主线程调用回调函数等很多步骤。我们把整个过程叫做异步过程。异步函数的调用在整个异步过程中，只是一小部分

### 栈 stack
函数调用形成了一个栈帧

### 堆 heap
对象被分配在一个堆中，即用以表示一个大部分非结构化的内存区域

### 引擎
解释并编译代码，让它变成能交给机器运行的代码（runnable commands）

### runtime
就是运行环境，它提供一些对外接口供Js调用，以跟外界打交道

### 阻塞 blocking
* alert
* 同步 XHR
* while (new Date() < 1000)
* js download

### webApis
* DOM
* AJAX
* setTimeout

### 任务队列 queue
消息队列是一个先进先出的队列，它里面存放着各种消息。
消息队列中的每条消息实际上都对应着一个事件

macro tasks: 
* script(全局任务)
* setTimeout/setInterval
* setImmediate,
* I/O 
* UI rendering

micro tasks: 
* process
* nextTick
* Promise
* Object.observer
* MutationObserver

### Event
DOM事件

### Event Loop
事件循环是指主线程重复从消息队列中取消息、执行的过程

取一个宏任务来执行。执行完毕后，下一步。
取一个微任务来执行，执行完毕后，再取一个微任务来执行。直到微任务队列为空，下一步。
更新UI渲染。


### notice
* 异步函数实际上很快就调用完成了
* 工作线程将消息放到消息队列，主线程通过事件循环过程去取消息
* 异步过程的回调函数，一定不在当前这一轮事件循环中执行

### Reference

* [并发模型与事件循环 MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop)
* [JavaScript 异步、栈、事件循环、任务队列](https://segmentfault.com/a/1190000011198232)
* [彻底理解同步、异步和事件循环(Event Loop)](https://segmentfault.com/a/1190000004322358)
* [tasks-microtasks-queues-and-schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)
* [stuck in an event-loop](https://vimeo.com/96425312)
* [从event loop规范探究javaScript异步及浏览器更新渲染时机](https://github.com/aooy/blog/issues/5)
* [JavaScript 运行机制详解：再谈Event Loop](http://www.ruanyifeng.com/blog/2014/10/event-loop.html)
* [difference between javascript engine and javascript runtime environm](https://stackoverflow.com/questions/29027845/what-is-the-difference-between-javascript-engine-and-javascript-runtime-environm)
* [javascript事件循环机制](https://yangbo5207.github.io/wutongluo/ji-chu-jin-jie-xi-lie/shi-er-3001-shi-jian-xun-huan-ji-zhi.html)



