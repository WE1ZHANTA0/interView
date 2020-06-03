/*
 * @description: 寄生
 * @Author: WE1ZHANTA0
 * @Creat: 2020-05-29 10:48:57
 * @lastTime: 2020-05-29 11:27:13
 * @LastAuthor: WE1ZHANTA0
 */ 

// 重点：就是给原型式继承外面套了个壳子。
// 优点：没有创建自定义类型，因为只是套了个壳子返回对象（这个），这个函数顺理成章就成了创建的新对象。
// 缺点：没用到原型，无法复用。

// 父类
function Person(name, sex, age) {
  this.name = name
  this.sex = sex
  this.age = age
  // console.log(this)
  this.sub = function() {
    console.log(this.name)
  }
}

function content(obj) {
  function F(){}
  F.prototype = obj // 继承传入的参数
  return new F() // 返回函数对象
}

var sup = new Person()
// 以上是原型式继承，给原型式继承再套个壳子传递参数
function subObject(obj) {
  var sub = content(obj)
  sub.name = 'giao'
  return sub
}

var sup2 = subObject(sup)

console.log(typeof subObject)
console.log(typeof sup2)
console.log(sup2.name)