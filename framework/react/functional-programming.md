### [函数式编程][functional-programming]

纯函数是这样一种函数，即相同的输入，永远会得到相同的输出，而且没有任何可观察的副作用。


#### 纯函数的好处

* 不纯的函数会引入了外部的环境，从而增加了认知负荷

#### 副作用

只要是跟函数外部环境发生的交互就都是副作用

* 更改文件系统
* 往数据库插入记录
* 发送一个 http 请求
* 可变数据
* 打印/log
* 获取用户输入
* DOM 查询
* 访问系统状态

#### 好处

* 可缓存性（Cacheable）
* 可移植性／自文档化
* 可测试性（Testable）
* 合理性（Reasonable）
* 并行代码
* 减低代码的复杂度, 依赖度, 提高可维护性




[functional-programming]:https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/