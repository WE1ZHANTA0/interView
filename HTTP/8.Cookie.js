/*
 * @description: 
 * @Author: WE1ZHANTA0
 * @Creat: 2021-04-22 14:45:26
 * @lastTime: 2021-04-22 14:45:45
 * @LastAuthor: WE1ZHANTA0
 */
// Cookie 是服务器委托浏览器存储的一些数据，让服务器有了“记忆能力”；
// 响应报文使用 Set-Cookie 字段发送“key=value”形式的 Cookie 值；
// 请求报文里用 Cookie 字段发送多个 Cookie 值；
// 为了保护 Cookie，还要给它设置有效期、作用域等属性，常用的有 Max-Age、Expires、Domain、HttpOnly 等；
// Cookie 最基本的用途是身份识别，实现有状态的会话事务。