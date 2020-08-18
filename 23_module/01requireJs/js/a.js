// 同步写法
// (function () {
//     function fun1() {
//         alert('it works');
//     }

//     fun1();
// })();

/*

http://blog.chinaunix.net/uid-26672038-id-4112229.html
Sea.js 手册与文档
https://www.zhangxinxu.com/sp/seajs/docs/zh-cn/module-definition.html
慕课手记：
http://www.imooc.com/article/19828
    AMD定义了一个自由变量或者说是全局变量define，用法
             define( id?, dependencies?, factory )
    1. id 为字符串类型，表示了模块标识，为可选参数。
        若不存在则模块标识应该默认定义为在加载器中被请求脚本的标识。
        若存在，那么模块标识必须为顶层的或者一个绝对的标识
    2. dependencies ，是一个当前模块依赖的，已被模块定义的模块标识的数组字面量
    3. factory，是一个需要进行实例化的函数或者一个对象。

*/
// 创建模块标识为 alpha 的模块，依赖于 require， export，和标识为 beta 的模块
// define('alpha', ['require', 'exports', 'beta'], function (require, exports, beta) {
//     exports.verb = function () {
//         return beta.verb();

//     };
// });

// 一个返回对象字面量的异步模块
// define(['alpha'], function (alpha) {
//     return {
//         verb: function () {
//             return alpha.verb() + 1;
//         }
//     };
// });

// 无依赖模块可以直接使用对象字面量来定义
// define({
//     add: function (x, y) {
//         return x + y;
//     }
// });

// 类似与 CommonJS 方式定义
// define(function (require, exports, module) {
//     let a = require('a');
//     let b = require('b');

//     exports.action = function () { };
// });

// 引用require.js后的异步写法
// define(function () {
//     function fun1() {
//         alert('a.js加载中');
//     }

//     fun1();
// });