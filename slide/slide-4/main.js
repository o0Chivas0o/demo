let $buttons = $('.buttons > button')
let $slides = $('#slide')
let $images = $slides.children('img')
let current = 0

makeFakeSlides()
$slides.css({transform: 'translateX(-300px)'})
bindEvents()

$(pre).on('click',()=>{
  goToSlide(current - 1)
})
$(next).on('click',()=>{
  goToSlide(current + 1)
})

let timer = setInterval(()=>{
  goToSlide(current+1)
},1500)

$('.container').on('mouseenter',()=>{
  window.clearInterval(timer)
}).on('mouseleave',()=>{
  timer = setInterval(()=>{
    goToSlide(current+1)
  },1500)
})

function bindEvents () {
  $('.buttons').on('click', 'button', (e) => {
    let $button = $(e.currentTarget)
    let index = $button.index()
    goToSlide(index)
  })

  // $buttons.eq(0).on('click', () => {
  //   console.log(current)
  //   if (current === 2) {
  //     console.log('最后一张到第一张')
  //     $slides.css({transform: 'translateX(-1200px)'})
  //       .one('transitionend', () => {
  //         $slides.hide()
  //           .offset() // 阻止浏览器把hide() 和 show() 合并
  //                     // offset()返回的是一个对象无法链式操作
  //         $slides.css({transform: 'translateX(-300px)'}).show()
  //       })
  //   } else {
  //     $slides.css({transform: 'translateX(-300px)'})
  //     current = 0
  //   }
  // })
  // $buttons.eq(1).on('click', () => {
  //   console.log(current)
  //   $slides.css({transform: 'translateX(-600px)'})
  //   current = 1
  // })
  // $buttons.eq(2).on('click', () => {
  //   if (current === 0) {
  //     console.log(current)
  //     console.log('第一张到最后一张')
  //     $slides.css({transform: 'translateX(0)'})
  //       .one('transitionend', () => {
  //         $slides.hide()
  //           .offset()
  //         $slides.css({transform: 'translateX(-900px)'}).show()
  //       })
  //   } else {
  //     $slides.css({transform: 'translateX(-900px)'})
  //     current = 2
  //   }
  // })
}

function makeFakeSlides () {
  let $firstCopy = $images.eq(0).clone(true) // 复制第一张
  let $lastCopy = $images.eq($images.length - 1).clone(true) // 复制最后一张
  $slides.append($firstCopy) // 把第一张放到最后一张后面
  $slides.prepend($lastCopy) // 把最后一张放到第一张前面
}
function goToSlide(index){
  if(index>$buttons.length-1){
    index = 0
  }else if(index<0){
    index = $buttons.length -1
  }
  if (current === $buttons.length - 1 && index === 0) {
    $slides.css({transform: `translateX(${-($buttons.length + 1) * 300}px)`})
      .one('transitionend', () => {
        $slides.hide().offset()
        $slides.css({transform: `translateX(${-(index + 1) * 300}px)`}).show()
      })
  } else if (current === 0 && index === $buttons.length - 1) {
    $slides.css({transform: `translateX(0px)`})
      .one('transitionend', () => {
        $slides.hide().offset()
        $slides.css({transform: `translateX(${-(index + 1) * 300}px)`}).show()
      })
  } else {
    $slides.css({transform: `translateX(${-(index + 1) * 300}px)`})
  }
  current = index
}