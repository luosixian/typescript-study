(() => {

    class Person {
        // public修饰的属性可以在任意位置访问修改,默认

        // private修饰的属性只能在类内部修改
        // 要访问的话通过在该类中添加方法使其可以被外部间接访问

        // protected修饰的属性只能在当前类和当前类的子类中访问

        private _name: string;
        private _age: number;

        constructor(name: string, age: number) {
            this._name = name;
            this._age = age;
        }

        getName() {
            return this._name
        }
        setName(value: string) {
            this._name = value
        }
        setAge(value: number) {
            if (value >= 0) this._age = value;
        }

        // TS中设置get，set方法
        get name() {
            console.log('get执行了');
            return this._name
        }
        set name(value: string) {
            console.log('set执行了');
            this._name = value;
        }
    }

    const p1 = new Person('shimamu', 18);
    p1.name = 'keke'
    //p1.setName('keke')  
    console.log(p1);
    console.log(p1.name);

    // 属性直接定义在构造函数中
    class Idol {
        constructor(public name:string,public age:number) { 
            // 就不要什么this.name = name
        }
    }

})();