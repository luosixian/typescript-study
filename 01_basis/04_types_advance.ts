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

let e: string[]; //数组里必须全是string
//e = ['123', '123', 2] //报错

let f: number[];
let g: Array<number> //两个等效，都是必须全是数字的数组

let h: [string, number] //元组：固定长度的数组
//必须有且只有两个，且类型必须对应
//h = [123, '123'] //类型不对应，报错

enum Gender { //枚举：就是把所有的可能情况给列出来
    Male,
    Female
}

let i: { name: string, gender: Gender };
i = {
    name: '逆天',
    gender: Gender.Male
}

console.log(i.gender === Gender.Male);

// &表示必须同时满足
let j: { name: string } & { age: number };
j = {
    name: '逆天',
    age: 18
}

type myType = 1 | 2 | 3 | 4 | 5;
let k: myType;
let l: myType;
//k = 6 //报错