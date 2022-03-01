// 声明变量a，同时指定类型为number
// 以后的使用过程中a只能是number

let a: number;
a = 10;
a = 33;
//a = '12'; // 此行代码报错

let b: string;
b = 'hello';
//b = 123; //报错

// 如果变量的声明和赋值是同时进行的
// TS可以自动对变量进行类型检测
let c = true
//c = 123; // 报错

//函数返回值类型放在括号后面
const sum = (a: number, b: number): number => {
    return a + b;
}

const res = sum(1, 2)
console.log(sum(3, 5));
//console.log(sum(3, '123')); // 报错
