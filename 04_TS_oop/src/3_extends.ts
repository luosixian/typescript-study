(() => {
    class Person {
        name: string;
        age: number;
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
        say() {
            console.log(this.name);
        }
    }
    class Idol extends Person {

    }
    class Producer extends Person {
        say() { // 子类覆盖父类方法：方法重写
            console.log(this.age);
        }
    }

    const I1 = new Idol('shimamu', 15)
    console.log(I1);
    I1.say()
    const P1 = new Producer('chiyu', 25)
    console.log(P1);
    P1.say()
})();