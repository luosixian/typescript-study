"use strict";
class Person {
    constructor() {
        // 实例属性：必须创建对象访问
        // readonly 表示不能改
        this.name = 'shimamu';
        this.age = 17;
    }
    // 方法,也可以分为实例方法和静态(类)方法
    sayHello() {
        console.log('hello');
    }
}
// 使用static静态属性(类属性)：直接访问ok
Person.gender = 'female';
const p1 = new Person();
console.log(p1.age);
p1.sayHello();
console.log(Person.gender);
