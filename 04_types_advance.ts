let a: object
a = {};
a = function name() { }

/* let b: { name: string };
b = {} //报错 因为没有name属性
b = { name: 123 }; //报错 因为name必须是字符串
b = { name: '123', age: 12 } //报错，多了个age */

//解决办法:属性后面加问号，表示可有可没有
let b: { name?: string };
b = {}

//解释：
// 1. name必须有，且必须是字符串
// 2. propName随便取的，取什么都行，
// 3. [propName: string]表示所有字符串类型的属性名
// 4. 那些属性的类型是可以任意
let c: { name: string, [propName: string]: any }
c = { name: '逆天', age: 123, gender: 'male', 123: 23 }

//解释：
// 1. 希望d是一个函数，且有两个参数，都是number
// 2. 返回值也是number
let d: (a: number, b: number) => number
d = (n1, n2) => {
    return n1 + n2
}