let li = document.querySelectorAll('li');
for(i=0;i<li.length;i++){
  li[i].addEventListener('click',function(e){
    let target = e.currentTarget;
    if(target.classList[0] === 'pen' || target.classList[0] === 'eraser'){
      target.classList.add('active');
      for(j=0;j<li.length;j++){
        if(li[j].classList[0] !== target.classList[0]){
          li[j].classList.remove('active')
        }
      }
    }else if(target.classList[0] === 'empty'){
      context.clearRect(0,0,canvas.width,canvas.height)
    }else if(target.classList[0] === 'save'){
      let canvas=document.getElementById("app");
      let data=canvas.toDataURL("image/png");
      let newWindow=window.open('about:blank','image from canvas');
      newWindow.document.write("<img src='"+data+"' alt='from canvas'/>")
    }
  })
}
let canvas = document.querySelector("canvas");
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
let context = canvas.getContext("2d");
let prePoint;
canvas.addEventListener('touchmove',function(e){
  e.preventDefault();
  let {pageX,pageY} = e.touches[0];
  console.log(li[0].classList[1] === 'active');
  if (li[0].classList[1] === 'active'){
    if(prePoint){
      context.strokeStyle = 'red';
      context.beginPath();
      context.moveTo(prePoint.pageX,prePoint.pageY - 35);
      context.lineTo(pageX,pageY - 35);
      context.stroke()
    }
    prePoint = {pageX,pageY}
  }else if(li[1].classList[1] === 'active'){
    context.clearRect(pageX - 5,pageY - 40, 15, 15)
  }
});
canvas.addEventListener('touchend',function(){
  prePoint = null
})