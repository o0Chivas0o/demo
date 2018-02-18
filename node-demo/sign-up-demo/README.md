#### 使用方法

1. 需要clone本仓库到本地.
2. 在命令行输入 `node server 8888`
3. 点击注册,会跳转到注册页面.
4. 注册成功后,点击登录页面.
5. 输入注册信息,会跳转到`sign_in_success`页面,并显示输入密码

#### 记录
主要了解cookie的用法.
1. 服务器通过set-Cookie 响应头设置Cookie
2. 浏览器得到Cookie 之后 每次请求都要带上Cookie
3. 服务器读取Cookie就知道登录用户的信息
