"use strict";
(() => {
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    class Idol extends Person {
        say() {
            console.log('hi');
        }
    }
    const I1 = new Idol('shimamu');
    I1.say();
    //const P1 = new Person('abc') // 报错
})();
