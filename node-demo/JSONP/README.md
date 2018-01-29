自己写的JSONP demo  

1. 更改HOSTS文件:`$sudo vi /etc/hosts/`
   例如:`127.0.0.1 lee.com` 和 `127.0.0.1 jack.com`

2. 使用`PORT=8000(端口号随意) node server(node服务器)` 和   
`PORT=8001 node server` 开启两个服务器。

3. 在 lee.com:8000 下 可以访问到 jack.com:8001的数据。


---
JSONP 就是 构造一个动态加载的script 去进行跨域请求。  

这里请求只能是GET而不能是POST 因为script不具备POST请求的功能。  
  
同样的，link、img、iframe也可以进行跨域。  

```
JSONP

请求方：lee.com 的前端程序员（浏览器）
响应方：jack.com 的后端程序员（服务器）

1. 请求方创建 script，src 指向响应方，同时传一个查询参数 ?callbackName=yyy
2. 响应方根据查询参数callbackName，构造形如
    - yyy.call(undefined, '你要的数据')
    - yyy('你要的数据')
         这样的响应
3. 浏览器接收到响应，就会执行 yyy.call(undefined, '你要的数据')
4. 那么请求方就知道了他要的数据

这就是 JSONP
```
