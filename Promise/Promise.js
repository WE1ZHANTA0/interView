/*
 * @description: 
 * @Author: WE1ZHANTA0
 * @Creat: 2021-02-26 16:52:48
 * @lastTime: 2021-02-26 17:49:40
 * @LastAuthor: WE1ZHANTA0
 */
class Promise {
  constructor(executor) {
    // 默认状态
    this.status = 'pendding'
    this.value = undefined 
    this.reason = undefined // 错误信息
    // 存放成功回调
    this.onResolvedCallbacks = []
    // 失败回调
    this.onRejectedCallbacks = []

    let resolve = (data) => {
      if (this.status === 'pendding') {
        this.value = data
        this.status = 'resolved'
        this.onResolvedCallbacks.forEach(fn => fn())
      }
    }

    let reject = (reason) => {
      if (this.status === 'pendding') {
        this.reason = reason
        this.status = 'rejected'
        this.onRejectedCallbacks.forEach(fn => fn())
      }
    }

    try {
      executor(resolve, reject)
    } catch (e) {
      reject(e) // promise失败了 
    }
  }

  then(onFulfilled, onRejected) {
    if (this.status === 'resolved') {
      onFulfilled(this.value)
    } else if (this.status === 'rejected') {
      onRejected(this.reason)
    } else {  // pendding状态
      this.onResolvedCallbacks.push(() => {
        onFulfilled(this.value)
      })
      this.onRejectedCallbacks.push(() => {
        onFulfilled(this.reason)
      })
    }
  }
}

let abc = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(111)
    resolve('111')
  }, 1000);
}).then((res) => {
  console.log('成功', res)
})
