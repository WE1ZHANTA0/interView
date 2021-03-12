/*
 * @description: 
 * @Author: WE1ZHANTA0
 * @Creat: 2020-05-29 11:38:06
 * @lastTime: 2021-03-02 15:49:36
 * @LastAuthor: WE1ZHANTA0
 */ 

// 1.apply：调用一个对象的一个方法，用另一个对象替换当前对象。例如：B.apply(A, arguments);即A对象应用B对象的方法。


// 2.call：调用一个对象的一个方法，用另一个对象替换当前对象。例如：B.call(A, args1,args2);即A对象调用B对象的方法。
// 但是终究apply里面的数组参数会转变为call方法的参数形式，然后去走下面的步骤，这也是为什么call执行速度比apply快。这边详情有篇文章有介绍，https://zhuanlan.zhihu.com/p/27659836

// 3.bind除了返回是函数以外，它的参数和call一样。
// bind里面的this指向，会永远指向bind到的当前的thisArg，即context上下文环境参数不可重写。这也是为什么a.bind(b).call(c)，最终的this指向会是b的原因。至于为什么，其实就是bind实现实际上是通过闭包，并且配合call/apply进行实现的
