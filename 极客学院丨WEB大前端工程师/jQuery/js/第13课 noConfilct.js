//$.noConflict()替换美元符号为jQuery
var yhtml5=$.noConflict()//替换美元符号为yhtml5
yhtml5(document).ready(function () {
    yhtml5("#btn").on("click",function () {
        yhtml5("div").text("new world")
      
    })
    
  
})
