$('.image >img:nth-child(1)').addClass('current')
$('.image >img:nth-child(2)').addClass('enter')
$('.image >img:nth-child(3)').addClass('enter')
setTimeout(() => {
  $('.image >img:nth-child(1)').removeClass('current').addClass('leave').one('transitionend',(e)=>{
    $(e.currentTarget).removeClass('leave').addClass('enter')
  })
  $('.image >img:nth-child(2)').removeClass('enter').addClass('current')
}, 1000)
setTimeout(() => {
  $('.image >img:nth-child(2)').removeClass('current').addClass('leave').one('transitionend',(e)=>{
    $(e.currentTarget).removeClass('leave').addClass('enter')
  })
  $('.image >img:nth-child(3)').removeClass('enter').addClass('current')
}, 2000)
setTimeout(() => {
  $('.image >img:nth-child(3)').removeClass('current').addClass('leave').one('transitionend',(e)=>{
    $(e.currentTarget).removeClass('leave').addClass('enter')
  })
  $('.image >img:nth-child(1)').removeClass('enter').addClass('current')
}, 3000)
setTimeout(() => {
  $('.image >img:nth-child(1)').removeClass('current').addClass('leave').one('transitionend',(e)=>{
    $(e.currentTarget).removeClass('leave').addClass('enter')
  })
  $('.image >img:nth-child(2)').removeClass('enter').addClass('current')
}, 4000)