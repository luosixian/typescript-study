(() => {

    type myType = {
        name: string,
        age: number,
    }
    interface myInterface { // 定义了类的结构
        name: string;
        age: number;
    }
    interface myInterface { // interface可以重复定义，最终以两个合起来为准
        gender: string;
    }
    // 把这里的myInterface换成myType没有区别，效果一样
    const obj: myInterface = {
        name: 'shimamu',
        age: 17,
        gender: 'female',
    }

    // 接口只定义对象结构，不考虑实际值，方法也不能写方法体
    // 和抽象类很像，但是接口里面的方法只能是抽象方法
    interface myInter {
        name: string;
        say(): void;
    }

    //用途：定义类时，用类去实现一个接口
    class myClass implements myInter {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
        say(): void {
            throw new Error("Method not implemented.");
        }
    }
})();