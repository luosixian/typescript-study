"use strict";
(() => {
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        getName() {
            return this._name;
        }
        setName(value) {
            this._name = value;
        }
        setAge(value) {
            if (value >= 0)
                this._age = value;
        }
        // TS中设置get，set方法
        get name() {
            console.log('get执行了');
            return this._name;
        }
        set name(value) {
            console.log('set执行了');
            this._name = value;
        }
    }
    const p1 = new Person('shimamu', 18);
    p1.name = 'keke';
    //p1.setName('keke')  
    console.log(p1);
    console.log(p1.name);
    // 属性直接定义在构造函数中
    class Idol {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            // 就不要什么this.name = name
        }
    }
})();
