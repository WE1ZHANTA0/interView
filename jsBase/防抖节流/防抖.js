/*
 * @description: 
 * @Author: WE1ZHANTA0
 * @Creat: 2021-03-31 14:29:47
 * @lastTime: 2021-03-31 14:40:29
 * @LastAuthor: WE1ZHANTA0
 */
const debounce = function(func, wait, immdieate = true) {
  let timer
  // 延迟执行
  let later = (context, args) => setTimeout({
    timer = null
    if (!immdieate) {
      func.apply(context, args)
      // 执行回调
      context = args = null
    }
  }, wait)

  let debounced = function(...params) {
    let context = this
    let args = params
    if (!timer) {
      timer = later(context, args)
      if (immdieate) {
        func.apply(context, args)
      }
    } else {
      clearTimeout(timer)
      timer = later(context, args)
    }
  }
  debounced.cancel = function(){
    clearTimeout(timer)
    timer = null
  }

  return debounced
}