/*
 * @description: 
 * @Author: WE1ZHANTA0
 * @Creat: 2020-05-29 11:39:31
 * @lastTime: 2020-05-29 11:40:43
 * @LastAuthor: WE1ZHANTA0
 */ 

// 1.箭头函数没有this，所以需要通过查找作用域链来确定this的值，这就意味着如果箭头函数被非箭头函数包含，this绑定的就是最近一层非箭头函数的this，
// 2.箭头函数没有自己的arguments对象，但是可以访问外围函数的arguments对象
// 3.不能通过new关键字调用，同样也没有new.target值和原型