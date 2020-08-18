class Point {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}

class ColorPoint extends Point {
    // 如果constructor不存在，系统会默认添加这个方法,即：
    // constructor(...args) {
    //     super(...args);
    // }

    constructor(x, y, color) {
        // 1.super作用：调用父类的构造函数，用来新建父类的this对象
        // 2.子类必须在constructor中调用super方法，否则新建示例会报错
        // 原因：子类自己的this对象，必须通过父类的构造函数完成塑造，得到与父类同样的实例属性和方法,
        //       如果不调用super方法，子类就得不到this对象
        // 4.如果子类没有定义constructor方法，这个方法默认会被添加

        // 5.调用父类的constructor(x,y)方法
        // Point.prototype.constructor.call(this)。
        super(x, y);
        this.color = color;
        console.log(super.getName);
    }
    getName() {
        return this.color + '————' + super.getName();
    }
}
let cp = new ColorPoint(25, 8, 'green');
console.log(cp);
// instanceof:运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链
// cp同时是ColorPoint和Point两个类的实例
cp instanceof ColorPoint;
cp instanceof Point;