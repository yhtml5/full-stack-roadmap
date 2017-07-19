### [DOM事件][dom-event-architecture]

* HTML 事件可以是浏览器行为，也可以是用户行为
* DOM2.0模型将事件处理流程分为三个阶段：一、事件捕获阶段，二、事件目标阶段，三、事件冒泡阶段
* 在web dom编程时 js事件驱动机制
* addEventListener(event, function, useCapture)
* 向原元素添加/删除事件句柄
  > element.addEventListener("click", function(){ alert("Hello World!"); });
  > element.removeEventListener("mousemove", myFunction);
* 向同一个元素中添加多个事件句柄
  ```
  element.addEventListener("mouseover", myFunction);
  element.addEventListener("click", mySecondFunction);
  element.addEventListener("mouseout", myThirdFunction);
  ```
* 事件传递有两种方式：冒泡与捕获
* 在 冒泡 中，内部元素的事件会先被触发，然后再触发外部元素，即： <p> 元素的点击事件先触发，然后会触发 <div> 元素的点击事件。
* 在 捕获 中，外部元素的事件会先被触发，然后才会触发内部元素的事件，即： <div> 元素的点击事件先触发 ，然后再触发 <p> 元素的点击事件。
* 事件委托
  1. 管理的函数变少了。不需要为每个元素都添加监听函数。对于同一个父节点下面类似的子元素，可以通过委托给父元素的监听函数来处理事件。
  2. 可以方便地动态添加和修改元素，不需要因为元素的改动而修改事件绑定。
  3. JavaScript和DOM节点之间的关联变少了，这样也就减少了因循环引用而带来的内存泄漏发生的概率。
* 当我们需要对很多元素添加事件的时候，可以通过将事件添加到它们的父节点而将事件委托给父节点来触发处理函数, 这主要得益于浏览器的事件冒泡机制
```
<ul id="parent-list">
  <li id="post-1">Item 1</li>
  <li id="post-2">Item 2</li>
  <li id="post-3">Item 3</li>
  <li id="post-4">Item 4</li>
  <li id="post-5">Item 5</li>
  <li id="post-6">Item 6</li>
</ul>

function addListeners4Li(liNode){
    liNode.onclick = function clickHandler(){...};
    liNode.onmouseover = function mouseOverHandler(){...}
}

window.onload = function(){
    var ulNode = document.getElementById("parent-list");
    var liNodes = ulNode.getElementByTagName("Li");
    for(var i=0, l = liNodes.length; i < l; i++){
        addListeners4Li(liNodes[i]);
    }   
}

// 获取父节点，并为它添加一个click事件
document.getElementById("parent-list").addEventListener("click",function(e) {
  // 检查事件源e.targe是否为Li
  if(e.target && e.target.nodeName.toUpperCase == "LI") {
    // 真正的处理过程在这里
    console.log("List item ",e.target.id.replace("post-")," was clicked!");
  }
});
```
#### 优缺点
* 减少事件注册，节省内存。在table上代理所有td的click事件
* 简化了dom节点更新时，相应事件的更新。不用在新添加/删除的li上绑定click事件。
* 事件委托基于冒泡，对于不冒泡的事件不支持。
* 层级过多，冒泡过程中，可能会被某层阻止掉。
* 理论上委托会导致浏览器频繁调用处理函数，虽然很可能不需要处理。所以建议就近委托，比如在table上代理td，而不是在document上代理td。
* 把所有事件都用代理就可能会出现事件误判。比如，在document中代理了所有button的click事件，另外的人在引用改js时，可能不知道，造成单击button触发了两个click事件。

不冒泡的事件:
例如load、unload、blur、focus、mouseleave......
详细内容见[W3C文档][w3c-event-type]：文档中事件的Bubbles属性为NO的不支持冒泡
* 链接上的focus或blur事件仅发生于链接自身上，而它的任何父节点上的事件都不会产生，所有不会冒泡。
