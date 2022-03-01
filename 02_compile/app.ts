console.log('hello');
let a = 10;
let b: number;
let c = '123'
//12341234124

// "noImplicitAny": true, 不允许隐式any类型
function fn1(params) { //报错
    console.log(params);
}

// "noImplicitThis": true, 不允许隐式类型的this
function fn2() {
    console.log(this); //报错
}

// "strictNullChecks": true, 严格的检查空值
// 解决办法：box后面加? 表示box有的话才执行后面，没有就不执行
let box = document.getElementById('box');
box.addEventListener('click', () => {  //报错
    console.log(123);
})
