/*
 * @description: 对字符串进行全排列
 * @Author: WE1ZHANTA0
 * @Creat: 2020-05-25 14:32:24
 * @lastTime: 2020-05-25 15:22:10
 * @LastAuthor: WE1ZHANTA0
 */ 
function permutate(str) {
    var array = str.split('');
    function loop(array, pre = []) {
        if (array.length == 1) { // str.length= 1 或者 array数组是length是1
            return [pre.concat(array).join('')]; // 真正返回的地方
        }
        let res = [];
        const data = new Date().valueOf()
        for (let index = 0; index < array.length; index++) {
            var first = array.pop(); // 删掉最后一个并返回
            res = res.concat(loop(array, [...pre, first])); // 递归 这里就是为了组成 1 和 n-1的各种情况  
            array.unshift(first); // 放到第一个
        }
        return res;
    }
    return Array.from(new Set(loop(array))) // 去重
}

permutate('好的狗子')
// console.log(permutate('好的狗子'))

