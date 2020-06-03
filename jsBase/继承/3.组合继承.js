/*
 * @description: 组合继承
 * @Author: WE1ZHANTA0
 * @Creat: 2020-05-28 11:22:34
 * @lastTime: 2020-05-29 10:38:07
 * @LastAuthor: WE1ZHANTA0
 */ 

//  通过调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用
// 重点：结合了两种模式的优点，传参和复用
// 特点：1、可以继承父类原型上的属性，可以传参，可复用。
// 　　　2、每个新实例引入的构造函数属性是私有的。
// 缺点：调用了两次父类构造函数（耗内存），子类的构造函数会代替原型上的那个父类构造函数。

// 父类
function Person(name, sex, age) {
  this.name = name
  this.sex = sex
  this.age = age
  console.log(this)
  this.sub = function() {
    console.log(this.name)
  }
}
Person.prototype.sayHi = () => {
  // console.log(this)
  console.log(this.name)
}

// 子类
function Son(name, sex, age) {
  console.log(111)
  Person.call(this, name, sex, age)
  this.code = 50
}
console.log(222)
Son.prototype = new Person()
Son.prototype.constructor = Son

let result = new Son('小明', '男', 19)
// console.log(result)
// console.log(result.name)
result.sayHi() // 'undefind'
result.sub() // '小明‘