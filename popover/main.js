// 第一种方式实现popover
clickMe.addEventListener('click', function (e) {
  popover.classList.add('active')
})
wrapper.addEventListener('click', function (e) {
  e.stopPropagation()
})
document.documentElement.addEventListener('click', function () {
  popover.classList.remove('active')
})

// 第二种方法实现 jquery
// $(clickMe).on('click',()=>{
//   $(popover).addClass('active')
//   setTimeout(()=>{
//     $(document).one('click',()=>{
//       $(popover).removeClass('active')
//     })
//   })
// })