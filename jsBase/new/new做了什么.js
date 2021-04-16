/*
 * @description: 
 * @Author: WE1ZHANTA0
 * @Creat: 2021-03-02 16:04:59
 * @lastTime: 2021-04-15 14:55:49
 * @LastAuthor: WE1ZHANTA0
 */
// 要创建 Person 的新实例，必须使用 new 操作符。以这种方式调用构造函数实际上会经历以下 4个步骤：
// (1) 创建一个新对象；
// (2) 将构造函数的作用域赋给新对象（因此 this 就指向了这个新对象） ；
// (3) 执行构造函数中的代码（为这个新对象添加属性） ；
// (4) 返回新对象。


// var obj = new Base();

// 全等于==== >

// var obj = {};
// obj.__proto__ = Base.prototype;
// Base.call(obj);

// 第一行，我们创建了一个空对象obj
// 第二行，我们将这个空对象的__proto__成员指向了Base函数对象prototype成员对象
// 第三行，我们将Base函数对象的this指针替换成obj，然后再调用Base函数，于是我们就给obj对象赋值了一个id成员变量，这个成员变量的值是”base”，关于call函数的用法。

// function newOperator(func, ...args) {
//   if (typeof func !== 'function') {
//       console.error('第一个参数必须为函数，您传入的参数为', func)
//       return
//   }
//   // 创建一个全新对象，并将其`__proto__`属性指向构造函数的`prototype`属性
//   let newObj = Object.create(func.prototype)
//   // 将构造函数调用的this指向这个新对象，并执行构造函数
//   let result = func.apply(newObj, args)
//   // 如果构造函数返回对象类型Object，则正常返回，否则返回这个新的对象
//   return (result instanceof Object) ? result : newObj
// }