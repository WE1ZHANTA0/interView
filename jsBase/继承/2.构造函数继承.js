/*
 * @description: 
 * @Author: WE1ZHANTA0
 * @Creat: 2020-05-25 17:44:05
 * @lastTime: 2020-05-28 11:59:08
 * @LastAuthor: WE1ZHANTA0
 */ 

// 构造继承，使用父类的构造函数来增强子类实例，
// 即复制父类的实例属性给子类，构造继承可以向父类传递参数，可以实现多继承，通过call多个父类对象。
// 但是构造继承只能继承父类的实例属性和方法，不能继承原型属性和方法，无法实现函数复用，每个子类都有父类实例函数的副本，影响性能

// 重点：用.call()和.apply()将父类构造函数引入子类函数（在子类函数中做了父类函数的自执行（复制））
// 特点：1、只继承了父类构造函数的属性，没有继承父类原型的属性。
// 　　　2、解决了原型链继承缺点1、2、3。
// 　　　3、可以继承多个构造函数属性（call多个）。
// 　　　4、在子实例中可向父实例传参。
// 缺点：1、只能继承父类构造函数的属性。
// 　　　2、无法实现构造函数的复用。（每次用每次都要重新调用）
// 　　　3、每个新实例都有父类构造函数的副本，臃肿。

// 构造器
function Animation(obj) {
  this.name = obj.name
  this.age = obj.age
}

Animation.prototype.eat = function() {
  console.log(this.name)
}

function Cat(obj) {
  Animation.call(this, obj)
  this.sex = obj.sex
  this.code = obj.code
}

var abc = new Cat({name: '小明', age: 18, sex: '男', code: 80})
console.log(abc)
console.log(abc.eat) // undefined
console.log(abc instanceof Animation) // false
console.log(abc instanceof Cat) // true