if(screen.width >= 675) {
  $('.slides').on('click', '.controls li', function (e) {
    let $li = $(e.currentTarget);
    let index = $li.index();
    go(index)
  });

  let current = 0;

  setInterval(function () {
    let nextIndex = current + 1;
    if (nextIndex === 3) {
      nextIndex = 0
    }
    go(nextIndex);
    current = nextIndex
  }, 2000);

  function go (index) {
    $('.slides .controls li').eq(index).addClass('active').siblings().removeClass('active');
    $('.info >ol >li').eq(index).addClass('active').siblings().removeClass('active');
    let width = $('.slides>.window').width();
    $('.slides > .window > ol').css({
      transform: 'translateX(' + (-width * index) + 'px)'
    })
  }
}

let n = 1
let list = document.querySelector('#list')
loadMoreButton.onclick = function () {
  let request = new XMLHttpRequest()
  request.open('GET',`./page-${n+1}.html`)
  request.onload = function () {
    n += 1
    let response = request.responseText
    let data = window.JSON.parse(response)
    for(let i=0;i<data.content.length; i++){
      let li = `<li>
         <img src="${data.content[i].url}">
         <h3>${data.content[i].h3}</h3>
         <p>${data.content[i].p}</p>`
      list.insertAdjacentHTML('beforeend',li)
    }
    if(data.hasNextPage === false){
      loadMoreButton.disabled = true
      loadMoreButton.textContent = '暂无更多结果'
    }
  }
  request.send()
}

window.onscroll = function (){
  let doc = document.documentElement;
  let top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  let clientHeight = doc.clientHeight
  let viewportOffset = loadMoreButton.getBoundingClientRect()
  let buttonTop = viewportOffset.top
  if(buttonTop > clientHeight - 50){
  }else{
   loadMoreButton.onclick()
  }
}