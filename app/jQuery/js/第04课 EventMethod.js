$(document).ready(function () {
    $(".btn1").click(function () {
        $(this).hide();});
    
    $(".btn2").dblclick(function () {
        $(this).hide();});
    
    $(".btn3").mouseenter(function () {
        $(this).hide();});
        
    $(".btn4").mouseleave(function () {
        $(this).hide();});
        
    $(".btn5").click(function () {
        alert("hello")});//这种写法当代码非常多时非常消耗内存    
        
    $(".btn6").bind("click",clickBtn1)//事件绑定
    $(".btn6").bind("click",clickBtn2)
    $(".btn6").unbind("click",clickBtn1)//解除clickBtn1的单击事件    
    
    $(".btn6").on("click",clickBtn1)//jq1.7以后用on/off代替bind
    $(".btn6").on("click",clickBtn2) 
    $(".btn6").off("click",clickBtn1)
})

function clickBtn1 (e) {
    console.log("clickBtn1")//控制台日志、用于调试JavaScript
    }
function clickBtn2 (e) {
    console.log("clickBtn2")//控制台日志、用于调试JavaScript
    }    