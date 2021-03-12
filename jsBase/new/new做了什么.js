/*
 * @description: 
 * @Author: WE1ZHANTA0
 * @Creat: 2021-03-02 16:04:59
 * @lastTime: 2021-03-02 16:08:21
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