// 同步写法
// (function () {
//     function fun1() {
//         alert('it works');
//     }

//     fun1();
// })();

// 引用require.js后的异步写法
define(function () {
    function fun1() {
        alert('a.js加载中');
    }

    fun1();
});