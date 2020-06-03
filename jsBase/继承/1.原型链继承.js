/*
 * @description: 
 * @Author: WE1ZHANTA0
 * @Creat: 2020-05-25 17:35:02
 * @lastTime: 2020-06-02 11:51:58
 * @LastAuthor: WE1ZHANTA0
 */ 

// 原型链继承，将父类的实例作为子类的原型，
// 他的特点是实例是子类的实例也是父类的实例，父类新增的原型方法/属性，子类都能够访问，并且原型链继承简单易于实现，
// 缺点是来自原型对象的所有属性被所有实例共享，无法实现多继承，无法向父类构造函数传参， 属性的继承无意义

// 重点：让新实例的原型等于父类的实例。
// 特点：1、实例可继承的属性有：实例的构造函数的属性，父类构造函数属性，父类原型的属性。（新实例不会继承父类实例的属性！）
// 缺点：1、新实例无法向父类构造函数传参。
//      2、继承单一。
// 　　　3、所有新实例都会共享父类实例的属性。（原型上的属性是共享的，一个实例修改了原型属性，另一个实例的原型属性也会被修改！）

// 用 new 操作符调用构造函数实际上会经历以下 4 个步骤:

// 1.创建一个新对象;
// 2.将构造函数的作用域赋给新对象(因此 this 就指向了这个新对象);
// 3.执行构造函数中的代码(为这个新对象添加属性);
// 4.返回新对象。
// 5.将构造函数的prototype关联到实例的__proto__

// 父类
function Person(name, sex, age) {
  this.name = name
  this.sex = sex
  this.age = age
  this.hehe = 'test'
}

Person.prototype.sayHi = () => {
  console.log('哈喽 我是' + this.name)
}

// 子类
function Son() {
  this.code = 50
  this.changeName = () => {
    console.log(this.hehe)
    this.name = 'hehe'
  }
}
Son.prototype = new Person()
Son.prototype.constructor = Son

let result = new Son()
result.changeName()
result.sayHi()

