let canvas = document.getElementById('canvas')
let context = canvas.getContext('2d')
let eraserEnabled = false

autoSetCanvasSize(canvas)
listenToUser(canvas)

pen.onclick = function(){
  eraserEnabled = false
  eraser.classList.remove('active')
  pen.classList.add('active')
}
eraser.onclick = function(){
  eraserEnabled = true
  pen.classList.remove('active')
  eraser.classList.add('active')
}
empty.onclick = function(){
  context.clearRect(0,0,canvas.width,canvas.height)
}
save.onclick = function(){
  let data=canvas.toDataURL("image/png");
  let newWindow=window.open('about:blank','image from canvas');
  newWindow.document.write("<img src='"+data+"' alt='from canvas'/>")
}
red.onclick = function(){
  yellow.classList.remove('select')
  blue.classList.remove('select')
  black.classList.remove('select')
  red.classList.add('select')
  context.strokeStyle = 'red'
}
yellow.onclick = function(){
  red.classList.remove('select')
  blue.classList.remove('select')
  black.classList.remove('select')
  yellow.classList.add('select')
  context.strokeStyle = 'yellow'
}
blue.onclick = function(){
  red.classList.remove('select')
  yellow.classList.remove('select')
  black.classList.remove('select')
  blue.classList.add('select')
  context.strokeStyle = 'blue'
}
black.onclick = function(){
  red.classList.remove('select')
  yellow.classList.remove('select')
  blue.classList.remove('select')
  black.classList.add('select')
  context.strokeStyle = 'black'
}
function drawLine(x1,y1,x2,y2){
  context.beginPath()
  context.moveTo(x1,y1 - 70)
  context.lineWidth = 5
  context.lineTo(x2,y2 - 70)
  context.stroke()
  context.closePath()
}

// 自动生成canvas画布大小
function autoSetCanvasSize(canvas) {
  setCanvasSize()
  window.onresize = function () {
    setCanvasSize()
  }
  function setCanvasSize () {
    let pageWidth = document.documentElement.clientWidth
    let pageHeight = document.documentElement.clientHeight - 70
    canvas.width = pageWidth
    canvas.height = pageHeight
  }
}

function listenToUser(canvas) {
  let using = false
  let lastPoint = {x: undefined, y: undefined}
  // 特性检测
  if(document.body.ontouchstart !== undefined){
    // 触屏设备
    canvas.ontouchstart = function(e){
      using = true
      let x = e.touches[0].clientX
      let y = e.touches[0].clientY
      if (eraserEnabled) {
        context.clearRect(x - 10, y - 80, 20, 20)
      } else {
        lastPoint = {
          'x': x,
          'y': y
        }
      }
    }
    canvas.ontouchmove = function(e){
      e.preventDefault();
      let x = e.touches[0].clientX
      let y = e.touches[0].clientY
      if (!using) {return}
      if (eraserEnabled) {
        context.clearRect(x - 10, y - 80, 20, 20)
      } else {
        let newPoint = {
          'x': x,
          'y': y
        }
        drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
        lastPoint = newPoint
      }
    }
    canvas.ontouchend = function(e){
      using = false
    }
  }else{
    // 非触屏设备
    // 监听鼠标按下
    canvas.onmousedown = function (e) {
      using = true
      let x = e.clientX
      let y = e.clientY
      if (eraserEnabled) {
        context.clearRect(x - 10, y - 80, 20, 20)
      } else {
        lastPoint = {
          'x': x,
          'y': y
        }
      }
    }
// 监听鼠标移动
    canvas.onmousemove = function (e) {
      let x = e.clientX
      let y = e.clientY
      if (!using) {return}
      if (eraserEnabled) {
        context.clearRect(x - 10, y - 80, 20, 20)
      } else {
        let newPoint = {
          'x': x,
          'y': y
        }
        drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
        lastPoint = newPoint
      }
    }
    // 监听鼠标离开
    canvas.onmouseup = function(e){
      using = false
    }
  }
}