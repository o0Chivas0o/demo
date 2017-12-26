let keys = {
  0: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  1: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  2: ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
  length:3
}
let hash = {q:'qq.com', w:'weibo.com', e:'ele.me', r:'renren.com', t:'taobao.com', y:'youtube.com', u:'uc.com', i:'iqiyi.com', o:undefined, p:undefined, a:'acfun.tv', s:'souhu.com', d:undefined, f:'facebook.com', g:'google.com', h:undefined, j:'jd.com', k:undefined, l:undefined, z:'zhihu.com', x:undefined, c:undefined, v:undefined, b:'baidu.com', n:undefined, m:undefined, length:27
}
let hashInLocalStorage = JSON.parse(localStorage.getItem('zzz') || 'null')
if(hashInLocalStorage){
  hash = hashInLocalStorage
}
for(let i = 0;i<keys.length;i++){
  let div = document.createElement('div')
  main.appendChild(div)
  let row = keys[i]
  for(let i = 0;i<row.length;i++){
    let kbd = document.createElement('kbd')
    let button = document.createElement('button')
    kbd.textContent = row[i]
    button.textContent = '编辑'
    button.id = row[i]
    button.onclick = function(e){
      key = e.target.id
      x = prompt('请输入新的网址')
      hash[key] = x
      localStorage.setItem('zzz',JSON.stringify(hash))
    }
    kbd.appendChild(button)
    div.appendChild(kbd)
  }
}

document.onkeypress = function(e){
    key = e.key
    website = hash[key]
    // location.href = 'http://'+website
    window.open('http://'+website,'_blank')
  }
