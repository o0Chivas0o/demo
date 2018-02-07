!function () {
  let duration = 50
  $('.actions').on('click', 'button', function (e) {
    let $button = $(e.currentTarget)
    let speed = $button.attr('data-speed')
    $button.addClass('active').siblings('.active').removeClass('active')
    switch (speed) {
      case 'slow' :
        duration = 100
        break
      case 'normal':
        duration = 50
        break
      case 'fast':
        duration = 10
        break
    }
  })
  function writeCode (prefix, code, fn) {
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let n = 0
    let id
    id = setTimeout(function run () {
      n += 1
      container.innerHTML = code.substring(0, n)
      styleTag.innerHTML = code.substring(0, n)
      container.scrollTop = container.scrollHeight
      if (n < code.length) {
        id = setTimeout(run, duration)
      } else {
        fn && fn.call()
      }
    }, 0)
  }

  let code = `/*
  * 首先需要皮卡丘的皮
  */
.preview-wrapper{
    background: #FFE600;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.container{
    width: 460px;
    height: 300px;
    position: relative;
}

/*
* 然后画一只鼻子
*/

.nose{
    width: 20px;
    height: 20px;
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    border: 10px solid transparent;
    border-top-color:black;
}
.nose::before{
    content:'';
    display: block;
    position: absolute;
    width: 20px;
    height: 5px;
    background: black;
    top: -13px;
    left: -10px;
    border-radius: 50%;
}

/*
*   画皮卡丘的两只眼睛
*/

.eye{
    position: absolute;
    width: 60px;
    height: 60px;
    background: #2E2E2E;
    border:2px solid;
    border-radius:50%;
    top: 60px;
}
.eye::before{
    content:'';
    display: block;
    position: absolute;
    width: 30px;
    height: 30px;
    border:2px solid black;
    background: white;
    border-radius: 50%;
    top: 3px;
    left: 3px;
}
.eye-left{
    right:50%;
    margin-right: 90px ;
}
.eye-right{
    left: 50%;
    margin-left: 90px ;
}

/*
*  画皮卡丘的上嘴唇
*/

.upperLip{
    position: absolute;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 130px;
    left: 0;
    z-index: 1;
}
.upperLip::before{
    content: '';
    display: block;
    height: 30px;
    width: 80px;
    border:3px solid;
    border-top:none;
    border-right:none;
    border-bottom-left-radius: 60px 30px;
    transform: rotateZ(-30deg);
    background: #FFE600;
}
.upperLip::after{
    content: '';
    display: block;
    height: 30px;
    width: 80px;
    border:3px solid;
    border-top:none;
    border-left:none;
    border-bottom-right-radius: 60px 30px;
    transform: rotateZ(30deg);
    background: #FFE600;
}
.wrapper-lowerLip{
    height: 178px;
    width: 100%;
    position: absolute;
    top: 138px;
    overflow: hidden;
}

/*
*   画皮卡丘的下嘴唇
*/

.lowerLip{
    position: absolute;
    border:3px solid;
    width: 120px;
    height: 1800px;
    bottom:0;
    left: 50%;
    transform:translateX(-50%);
    border-top:none;
    border-bottom-left-radius: 100px 900px;
    border-bottom-right-radius: 100px 900px;
    border-top-left-radius: 100px 80px;
    border-top-right-radius: 100px 80px;
    background: #FF485F;
    box-shadow:inset 0 1625px 0 20px #93000A;
}

/*
*   画皮卡丘的脸
*/

.face{
    position: absolute;
    width: 80px;
    height: 80px;
    top: 160px;
    border-radius: 50%;
    background: red;
    border:3px solid
}
.left-face{
    right:50%;
    margin-right: 120px;
}
.right-face{
    left: 50%;
    margin-left: 120px;
}

/* 
*   给pikachu加个动画吧 
*/

.nose:hover {
    animation: .1s move 0s infinite alternate;
}
@keyframes move{
    0% {
        transform: rotateZ(-5deg) translateX(-50%);
    }
    100%{
        transform: rotateZ(5deg) translateX(-50%);
    }
}

/*
*   好了,这只pikachu送给你
*/
`
  writeCode('', code)
}.call()