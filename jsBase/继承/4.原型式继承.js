/*
 * @description: 实例继承（原型式继承）
 * @Author: WE1ZHANTA0
 * @Creat: 2020-05-29 10:33:14
 * @lastTime: 2020-05-29 10:43:22
 * @LastAuthor: WE1ZHANTA0
 */ 

// 重点：用一个函数包装一个对象，然后返回这个函数的调用，这个函数就变成了个可以随意增添属性的实例或对象。object.create()就是这个原理。
// 特点：类似于复制一个对象，用函数来包装。
// 缺点：1、所有实例都会继承原型上的属性。
// 　　　2、无法实现复用。（新实例属性都是后面添加的）

function People(name){
  //属性
  this.name  = name
  //实例方法
  this.sleep=function(){
    console.log(this.name + '正在睡觉')
  }
}
//原型方法
People.prototype.eat = function(food){
  console.log(this.name + '正在吃：' + food);
}

function Wonman(name){ // object.created原理
  let instance = new People();
  instance.name = name || 'wangxiaoxia';
  return instance;
}
let wonmanObj = new Wonman();

wonmanObj.eat('bb')