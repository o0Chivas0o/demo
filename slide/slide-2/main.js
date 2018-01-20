// $('#p1').on('click', function () {
//   $('.images').css({
//     transform: 'translateX(0)'
//   })
// })
// $('#p2').on('click', function () {
//   $('.images').css({
//     transform: 'translateX(-300px)'
//   })
// })
// $('#p3').on('click', function () {
//   $('.images').css({
//     transform: 'translateX(-600px)'
//   })
// })

// for循环把上面代码优化
let allButtons = $('.buttons > span')
for (let i = 0; i < allButtons.length; i++) {
  $(allButtons[i]).on('click', function (e) { // allButtons[i] 是一个dom对象 不是jquery对象
    let index = $(e.currentTarget).index()    // dom获取自己是第几个元素的方法我写下面
    let p = index * -300
    $('.images').css({
      transform: `translateX(${p}px)`
    })
    n = index    //
    activeButton(allButtons.eq(n))
  })
}


//dom获取自己是第几个方法
// let n
// let children = s.parentNode.children
// for(let i=0;i<children.length;i++){
//   if(children === i)
//     n = i
//     console.log(n) // 打出n是第几个元素
// }

// 设置定时器 自动轮播
let n = 0;
let size = allButtons.length
allButtons.eq(n % size).trigger('click')


let timerId = setTimer()

function setTimer() {
  return setInterval(() => {
    n += 1
    allButtons.eq(n % size).trigger('click')
  }, 3000)
}

function activeButton($button) {
  $button
    .addClass('red')
    .siblings('.red').removeClass('red')
}

$('.window').on('mouseenter', function() {
  window.clearInterval(timerId)
})

$('.window').on('mouseleave', function() {
  timerId = setTimer()
})