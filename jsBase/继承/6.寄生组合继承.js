/*
 * @description: 寄生组合继承
 * @Author: WE1ZHANTA0
 * @Creat: 2020-05-29 10:45:30
 * @lastTime: 2020-05-29 11:33:31
 * @LastAuthor: WE1ZHANTA0
 */ 

// 通过寄生的方式来修复组合式继承的不足，完美的实现继承

//父类
function People(name,age){
  this.name = name || 'wangxiao'
  this.age = age || 27
}
//父类方法
People.prototype.eat = function(){
  return this.name + this.age + 'eat sleep'
}
//子类
function Woman(name,age){
  //继承父类属性
  People.call(this,name,age)
}
//继承父类方法
(function(){
  // 创建空类
  let Super = function(){};
  Super.prototype = People.prototype;
  //父类的实例作为子类的原型
  Woman.prototype = new Super();
})();
//修复构造函数指向问题
Woman.prototype.constructor = Woman;
let womanObj = new Woman();