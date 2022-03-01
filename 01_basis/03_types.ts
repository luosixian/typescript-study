//直接用字面量进行类型声明

let a: 10;
a = 10;
//a = 11; //报错

//应用场景：用|连接多个类型
let b: 'male' | 'female'
b = 'male';
b = 'female';

let c: boolean | string
c = true;
c = 'hello';

// any表示任意类型，
// 若设置为any，则关闭该变量的TS类型检测
// 使用TS时，不建议使用any类型
let d: any;
d = 10;
d = 'hello';
d = true;

//unkonwn表示未知类型
let e: unknown;
e = 10;

let num: number
//num = e //报错
num = e as number //不报错，类型断言，明确告诉解析器e就是number
num = <number>e

function fn(): void {
    console.log(123);
}

function fn2(): never {
    throw new Error("错了");
}