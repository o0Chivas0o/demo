// 第一种方式实现popover
// clickMe.addEventListener('click',function(e){
//   popover.classList.add('active')
//   e.stopPropagation()
// })
//
// document.documentElement.addEventListener('click',function(){
//   popover.classList.remove('active')
// })

// 第二种方法实现
$(clickMe).on('click',()=>{
  $(popover).addClass('active')
  setTimeout(()=>{
    $(document).one('click',()=>{
      $(popover).removeClass('active')
    })
  })
})