// 1. 初始化数据
let keys = {
  0: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  1: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  2: ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
  length:3
}
let hash = {q:'qq.com', w:'weibo.com', e:'ele.me', r:undefined, t:'taobao.com', y:'youtube.com', u:'uc.cn', i:'iqiyi.com', o:undefined, p:undefined, a:'acfun.tv', s:'souhu.com', d:undefined, f:'facebook.com', g:'google.com', h:undefined, j:undefined, k:undefined, l:undefined, z:'zhihu.com', x:undefined, c:undefined, v:undefined, b:'baidu.com', n:undefined, m:undefined, length:27
}
let hashInLocalStorage = JSON.parse(localStorage.getItem('zzz') || 'null')
if(hashInLocalStorage){
  hash = hashInLocalStorage
}


// 2. 生成键盘
function tag(tagName){
  return document.createElement(tagName)
}
for(let i = 0;i<keys.length;i++){
  let div = tag('div')
  main.appendChild(div)
  let row = keys[i]
  for(let i = 0;i<row.length;i++){
    let kbd = tag('kbd')
    let button = tag('button')
    let img = tag('img')

    if(hash[row[i]]){
      img.src = 'http://' + hash[row[i]] + '/favicon.ico'
      img.style.width = 18+'px'
      img.style.height = 18+'px'
    }else{
      img.src = '//i.loli.net/2017/12/26/5a425c3ed060d.jpg'
      img.style.width = 0
    }
    img.onerror = function(e){
      e.target.src = '//i.loli.net/2017/12/26/5a425c3ed060d.jpg'
      src.style.width = 0
    }

    kbd.textContent = row[i]
    button.textContent = '编辑'
    button.id = row[i]

    button.onclick = function(e){
      let button2 = e.target
      let img2 = button2.previousSibling
      let key = button2.id
      let x
      x = prompt('请输入新的网址')
      hash[key] = x
      img2.src = img.src = 'http://' + hash[row[i]] + '/favicon.ico'
      img2.style.width = 18+'px'
      img2.style.height = 18+'px'
      img2.onerror = function(xxx){
        xxx.target.src = '//i.loli.net/2017/12/26/5a425c3ed060d.jpg'
        src.style.width = 0
      }
      localStorage.setItem('zzz',JSON.stringify(hash))
    }
    kbd.appendChild(img)
    kbd.appendChild(button)
    div.appendChild(kbd)
  }
}

// 3. 监听用户按键盘
document.onkeypress = function(e){
    let key = e.key
    let website = hash[key]
    // location.href = 'http://'+website
    window.open('http://'+website,'_blank')
  }
