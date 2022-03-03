"use strict";
class Idol {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sing() {
        console.log(this.name);
    }
}
const I1 = new Idol('shimamu', 17);
console.log(I1.name);
I1.sing();
