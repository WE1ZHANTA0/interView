/*
 * @description: 希尔排序
 * @Author: WE1ZHANTA0
 * @Creat: 2020-05-25 16:22:38
 * @lastTime: 2020-05-25 16:53:29
 * @LastAuthor: WE1ZHANTA0
 */ 

// https://blog.csdn.net/Macuroon/article/details/80560504
// [90，26，33，80，70，55，6，30，40，20]
function ShellSort (arr) {
  const length = arr.length
  let gap = Math.floor(length)
  while (gap) {
    for (let i = gap; i < length; i++) {
      const temp = arr[i]
      let j
      for (j = i - gap; j >= 0 && temp < arr[j]; j = j - gap) {
        arr[j + gap] = arr[j]
      }
      arr[j + gap] = temp
    }
    gap = Math.floor(gap / 2)
  }
  return arr
}
ShellSort([90,26,33,80,70,55,6,30,40,20])
