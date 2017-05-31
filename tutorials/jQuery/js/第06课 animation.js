$(document).ready(function () {
    $("#btn1").click(function () {
        $("p").hide(1000)//设定时间1000毫秒
    })
    
    $("#btn2").click(function () {
        $("p").show(1000)
    })
    
    $("#btn3").click(function () {
        $("p").toggle(1000)
    })
})
