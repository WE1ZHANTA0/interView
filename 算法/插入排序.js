/*
 * @description: 插入排序
 * @Author: WE1ZHANTA0
 * @Creat: 2020-05-25 16:18:22
 * @lastTime: 2020-05-25 16:22:21
 * @LastAuthor: WE1ZHANTA0
 */ 

function InsertionSort (arr) {
  const length = arr.length
  for (let i = 1; i < length; i++) {
    const temp = arr[i]
    let j
    for (j = i - 1; j >= 0 && temp < arr[j]; j--) {
      arr[j+1] = arr[j]
    }
    arr[j+1] = temp
  }
  return arr
}
