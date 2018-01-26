$('.slides').on('click', '.controls li', function(e) {
  let $li = $(e.currentTarget);
  let index = $li.index();
  go(index)
});

let current = 0;

setInterval(function() {
  let nextIndex = current + 1;
  if (nextIndex === 4) {
    nextIndex = 0
  }
  go(nextIndex);
  current = nextIndex
}, 5000);

function go(index){
  $('.slides .controls li').eq(index).addClass('active').siblings().removeClass('active');
  let width = $('.slides>.window').width();
  $('.slides > .window > ol').css({
    transform: 'translateX(' + (-width*index)+'px)'
  })
}