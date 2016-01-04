//常用的扩展方式,封装自定义jQuery
$.myjq= function () {
  alert("Hello myjQuery")
}

$.fn.myjq=function(){
    $(this).text("Hello")
}
