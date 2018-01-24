let n
init.call(undefined)
setInterval(() => {
  toCurrent.call(undefined,getN.call(undefined,n))
    .one('transitionend', (e) => {
      toLeave.call(undefined,$(e.currentTarget))
  })
  toEnter.call(undefined,getN.call(undefined,n+1))
  n += 1
}, 1200)








// 封装代码
function calculateN (n) {
  if (n > 3) {
    n = n % 3
    if (n === 0) {
      n = 3
    }
  }
  return n
}
function getN(n){
  return $(`.image > img:nth-child(${calculateN.call(undefined,n)})`)
}
function init(){
  $('.image > img:nth-child(1)').addClass('current')
  $('.image > img:nth-child(2)').addClass('enter')
  $('.image > img:nth-child(3)').addClass('enter')
  n = 1
}

function toCurrent($node){
 return $node.removeClass('current enter').addClass('leave')
}
function toLeave($node){
  return $node.removeClass('leave current').addClass('enter')
}
function toEnter($node){
  return $node.removeClass('enter leave').addClass('current')
}