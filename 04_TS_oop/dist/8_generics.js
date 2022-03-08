"use strict";
const fun1 = (a) => {
    return a;
};
console.log(fun1('abc')); // 不指定泛型
console.log(fun1(123)); // 指定泛型
// 指定多个泛型
const fun2 = (a, b) => {
    console.log(a);
    console.log(b);
};
console.log(fun2(12345, 'abcde'));
// X泛型必须实现Inter接口
// 意思是传进去的a必须有个length属性，而且是number
const fun3 = (a) => {
    return a.length;
};
console.log(fun3([1, 2, 3]));
//console.log(fun3(123)); 报错，数字没有length属性
console.log(fun3({ length: 12 }));
// 类的情况
class Animal {
    constructor(name) {
        this.name = name;
    }
}
const cat = new Animal('cat');
