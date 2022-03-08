"use strict";
(() => {
    // 把这里的myInterface换成myType没有区别，效果一样
    const obj = {
        name: 'shimamu',
        age: 17,
        gender: 'female',
    };
    //用途：定义类时，用类去实现一个接口
    class myClass {
        constructor(name) {
            this.name = name;
        }
        say() {
            throw new Error("Method not implemented.");
        }
    }
})();
