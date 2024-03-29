/*
 * @description: 快速排序
 * @Author: WE1ZHANTA0
 * @Creat: 2020-05-25 15:57:52
 * @lastTime: 2020-05-25 16:07:36
 * @LastAuthor: WE1ZHANTA0
 */ 

/*
在左边找大数，在右边找小数
交换
 */
function QuickSort(arr, low, high) {
  let left = low
  let right = high
  let basic = arr[low]
  while (left < right) {
    while (left < right && arr[right] > basic) {
      right--
    }
    while (left < right && arr[left] <= basic) {
      left++
    }

    if (left < right) {
      const temp = arr[left]
      arr[left] = arr[right]
      arr[right] = temp
    } else {
      const temp = arr[low]
      arr[low] = arr[left]
      arr[left] = temp

      QuickSort(arr, low, left - 1)
      QuickSort(arr, right + 1, high)
    }
  }

  return arr
}
