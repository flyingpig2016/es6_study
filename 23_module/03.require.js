// CommonJS模块:实质是整体加载fs模块（即加载fs的所有方法），
// 生成一个对象（_fs），然后再从这个对象上面读取 3 个方法。
// 这种加载称为“运行时加载”，因为只有运行时才能得到这个对象，导致完全没办法在编译时做“静态优化”。

let {
    stat,
    exists,
} = require('fs');

// 等同于
// let _fs = require('fs');
// let stat = _fs.stat;
// let exists = _fs.exists;


// ES6 模块不是对象，而是通过export命令显式指定输出的代码，再通过import命令输入。
// 实质是从fs模块加载 3 个方法，其他方法不加载。这种加载称为“编译时加载”或者静态加载
// import {
//     stat,
//     exists,
// } from 'fs';
console.log(stat);
console.log(exists);
console.log(1);
// console.log(readfile);

