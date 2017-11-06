(function () {
  
  var state = {
       btnNormal:document.getElementById('btn-normal'),
       btnExpand:document.getElementById('btn-expand'),
  }

  function output(value){
      console.log(value || 1)
  }

  state.btnNormal.addEventListener('click', output)
  state.btnExpand.addEventListener('click', output)

})()

