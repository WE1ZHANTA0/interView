/*
 * @description: 
 * @Author: WE1ZHANTA0
 * @Creat: 2021-04-28 14:11:22
 * @lastTime: 2021-04-30 08:40:27
 * @LastAuthor: WE1ZHANTA0
 */
// 1. 合并css文件，如果页面加载10个css文件,每个文件1k，那么也要比只加载一个100k的css文件慢。
// 2. 减少css嵌套，最好不要嵌套三层以上。
// 3. 不要在ID选择器前面进行嵌套，ID本来就是唯一的而且权限值大，嵌套完全是浪费性能。
// 4. 建立公共样式类，把相同样式提取出来作为公共类使用。
// 5. 减少通配符*或者类似[hidden="true"]这类选择器的使用，挨个查找所有...这性能能好吗？
// 6. 巧妙运用css的继承机制，如果父节点定义了，子节点就无需定义。
// 7. 拆分出公共css文件，对于比较大的项目可以将大部分页面的公共结构样式提取出来放到单独css文件里，这样一次下载 后就放到缓存里，当然这种做法会增加请求，具体做法应以实际情况而定。
// 8. 不用css表达式，表达式只是让你的代码显得更加酷炫，但是对性能的浪费可能是超乎你想象的。
// 9. 少用css rest，可能会觉得重置样式是规范，但是其实其中有很多操作是不必要不友好的，有需求有兴趣，可以选择normolize.css。
// 10. cssSprite，合成所有icon图片，用宽高加上background-position的背景图方式显现icon图，这样很实用，减少了http请求。
// 11. 善后工作，css压缩(在线压缩工具 YUI Compressor)
// 12. GZIP压缩，是一种流行的文件压缩算法。



// 1. 避免使用@import，外部的css文件中使用@import会使得页面在加载时增加额外的延迟。

// > 2.避免过分重排
// 浏览器为了重新渲染部分或整个页面，重新计算页面元素位置和几何结构的进程叫做reflow
// 浏览器根据定义好的样式来计算，并将元素放到该出现的位置上，这个过程叫做reflow
// 页面上任何一个节点触发来reflow，会导致他的子节点和祖先节点重新渲染
// 导致reflow发生的情况

// 1. 改变窗口的大小  
// 2. 改变文字的大小
// 3. 添加 删除样式表
// 4. 内容的改变 输入框输入内容也会
// 5. 伪类的激活
// 6. 操作class属性
// 7. 脚本操作dom js改变css类
// 8. 计算offsetWidth和offsetHeight
// 9. 设置style属性
// 10.改变元素的内外边距 

// 1. 大小有关的 width,height,padding,margin,border-width,border,min-height
// 2. 布局有关的 display,top,position,float,left,right,bottom
// 3. 字体有关的 font-size,text-align,font-weight,font-family,line-height,white-space,vertical-align
// 4. 隐藏有关的 overflow,overflow-x,overflow-y

// 1. 不要一条条的修改dom的样式，预先定义好class，然后修改dom的classname
// 2. 不要修改影响范围较大的dom
// 3. 为动画元素使用绝对定位
// 4. 不要table布局，因为一个很小的改动会造成整个table重新布局
// 5. 避免设置大量的style属性，通过设置style属性改变节点样式的话，每一次设置都会触发一次reflow，所以最好使用class属性
// 6. 如果css里面有计算表达式，每次都会重新计算一遍，触发一次reflow


// > repaint 重绘

// 当一个元素的外观被改变，但是布局没有改变的情况
// 当元素改变的时候，不影响元素在页面中的位置，浏览器仅仅会用新的样式重绘此元素
// 常见的重绘元素

//  - 颜色 color,background
//  - 边框样式 border-style,outline-color,outline,outline-style,border-radius,box-shadow,outline-width
//  - 背景有关 background,backgound-image,background-position,background-repeat,background-size