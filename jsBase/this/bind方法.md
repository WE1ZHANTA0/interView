https://juejin.cn/post/6844903718089916429

```
var obj = {};
console.log(obj);
console.log(typeof Function.prototype.bind); // function
console.log(typeof Function.prototype.bind());  // function
console.log(Function.prototype.bind.name);  // bind
console.log(Function.prototype.bind().name);  // bound
```
## 结论1
1. bind是Functoin原型链中Function.prototype的一个属性，每个函数都可以调用它
2. bind本身是一个函数名为bind的函数，返回值也是函数，函数名是bound。（打出来就是bound加上一个空格）。 知道了bind是函数，就可以传参，而且返回值'bound '也是函数，也可以传参，bound 指原函数original bind之后返回的函数，便于说明

```
var obj = {
    name: '若川',
};
function original(a, b){
    console.log(this.name);
    console.log([a, b]);
    return false;
}
var bound = original.bind(obj, 1);
var boundResult = bound(2); // '若川', [1, 2]
console.log(boundResult); // false
console.log(original.bind.name); // 'bind'
console.log(original.bind.length); // 1
console.log(original.bind().length); // 2 返回original函数的形参个数
console.log(bound.name); // 'bound original'
console.log((function(){}).bind().name); // 'bound '
console.log((function(){}).bind().length); // 0
```

## 结论2
1. 调用bind的函数中的this指向bind()函数的第一个参数。
2. 传给bind()的其他参数接收处理了，bind()之后返回的函数的参数也接收处理了，也就是说合并处理了。
3. 并且bind()后的name为bound + 空格 + 调用bind的函数名。如果是匿名函数则是bound + 空格。
4. bind后的返回值函数，执行后返回值是原函数（original）的返回值。
5. bind函数形参（即函数的length）是1。bind后返回的bound函数形参不定，根据绑定的函数原函数（original）形参个数确定。
