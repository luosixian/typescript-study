const fun1 = <X>(a: X): X => {
    return a;
}
console.log(fun1('abc')); // 不指定泛型
console.log(fun1<number>(123)); // 指定泛型

// 指定多个泛型
const fun2 = <X, Y>(a: X, b: Y) => {
    console.log(a);
    console.log(b);
}
console.log(fun2<number, string>(12345, 'abcde'));

// 对泛型做限制
interface Inter {
    length: number;
}
// X泛型必须实现Inter接口
// 意思是传进去的a必须有个length属性，而且是number
const fun3 = <X extends Inter>(a: X): number => {
    return a.length
}
console.log(fun3([1, 2, 3]));
//console.log(fun3(123)); 报错，数字没有length属性
console.log(fun3({ length: 12 }));

// 类的情况
class Animal<T>{
    constructor(public name: T) {
    }
}
const cat = new Animal<string>('cat');