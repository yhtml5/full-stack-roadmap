$(document).ready(function () {
    $("body").on("click",bodyHandler);
    $("div").on("click",divHandler)
})

function bodyHandler (event) {
    conlog(event)
}
function divHandler (event) {
    conlog(event)//不是所有的浏览器支持console
    event.stopPropagation()//阻止父级事件冒泡
    event.stopImmediatePropagation()//阻止所有事件冒泡
}
function conlog (event) {
    console.log(event);
  
}


var btn
$(document).ready(function () {
    btn=$("btn") //先赋值后运算
    btn.click(function () {
       var e=jQuery.Event("MyEvent");
        btn.trigger(e);
    });
    btn.on("MyEvent",function (event) {
      console.log(event)
    })})
