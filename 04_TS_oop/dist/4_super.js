"use strict";
(() => {
    class Person {
        constructor(name) {
            this.name = name;
        }
        say() {
            console.log('hello');
        }
    }
    class Idol extends Person {
        constructor(name, age) {
            super(name); // 理解为什么调用父类构造函数：因为这里的constructor把父类覆盖了
            this.age = age;
        }
    }
    const I1 = new Idol('shimamu', 17);
    I1.say();
})();
