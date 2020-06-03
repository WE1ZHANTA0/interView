/*
 * @description: 利用闭包封装只执行一次的函数
 * @Author: WE1ZHANTA0
 * @Creat: 2020-06-03 14:55:35
 * @lastTime: 2020-06-03 15:15:39
 * @LastAuthor: WE1ZHANTA0
 */ 

function once (func) {
  var done;
  return function () {
    if (!done) {
      func.apply(null, arguments)
      done = true
    }
  }
}

var onlyDoOne = once(function() {
  console.log('1')
})
onlyDoOne()
onlyDoOne()
let theOrther = once(function(){
  console.log(2)
})
theOrther()
theOrther()
// console.log(onlyDoOne)
