let result = `/* 
 * 面试官你好，我是李智颖
 * 只用文字作做我介绍太单调了
 * 我就用代码来介绍吧
 * 首先准备一些样式
 */

*{
  transition: all 1s;
}
html{
  background: #eee;
}
#code{
  border: 1px solid #aaa;
  padding: 16px;
} 
`
let n = 0
let timer = setInterval(()=>{
  n +=1
  code.innerHTML = result.substring(0,n)
  code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css);
  styleTags.innerHTML = result.substring(0,n)
  if(n>=result.length){
    window.clearInterval(timer)
  }
},10)