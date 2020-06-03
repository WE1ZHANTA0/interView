/*
 * @description: 选择排序
 * @Author: WE1ZHANTA0
 * @Creat: 2020-05-25 16:16:48
 * @lastTime: 2020-05-25 16:17:21
 * @LastAuthor: WE1ZHANTA0
 */ 

/*
 寻找第i小的数的位置，放到i位置上
 */
function SelectionSort (arr) {
  const length = arr.length
  for (let i = 0; i < length; i++ ) {
    let minIndex= i
    for (let j = i + 1; j < length; j++) {
      minIndex = arr[minIndex] <= arr[j] ? minIndex : j
    }
    if (minIndex !== i) {
      const temp = arr[i]
      arr[i] = arr[minIndex]
      arr[minIndex] = temp

    }
  }
  return arr
}
