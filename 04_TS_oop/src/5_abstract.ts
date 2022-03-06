(() => {
    abstract class Person {
        name: string;
        constructor(name: string) {
            this.name = name
        }
        abstract say(): void;
    }
    class Idol extends Person {
        say() {
            console.log('hi');
        }
    }

    const I1 = new Idol('shimamu');
    I1.say()
    //const P1 = new Person('abc') // 报错
})()