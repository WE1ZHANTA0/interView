/*
 * @description: 冒泡排序
 * @Author: WE1ZHANTA0
 * @Creat: 2020-05-25 15:43:03
 * @lastTime: 2020-05-25 16:01:22
 * @LastAuthor: WE1ZHANTA0
 */ 
/*
第1次循环确定最大的
第n次循环确定第n大的
 */
function BubbleSort (arr) {
  const length = arr.length

  for (let i = 0; i < length; i++) {
    for (let j = 1; j < length-i; j++) {
      if (arr[j] < arr[j - 1]) {
        const temp = arr[j]
        arr[j] = arr[j - 1]
        arr[j - 1] = temp
      }
    }
  }

  return arr
}
