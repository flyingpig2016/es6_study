# es6_study

---
    书山有路皆美景!
---

## 1. 概述

### 1.1 规范分类 <br/>
 &emsp;&emsp;在 ES6 之前，社区制定了一些模块加载方案，最主要的有 CommonJS 和 AMD 两种, 前者用于服务器，后者用于浏览器。

#### 1.1.1 Common JS <br/>
+ Node.js的模块系统，就是参照 `CommonJS `规范实现的,一个单独文件就是一个模块，`module`变量代表当前模块，是一个对象；`Node.js` 通过`require` 方法来同步加载要依赖的模块，然后通过`extports` 属性即 `module.exports` 来导出需要暴露的接口。
+ `module.eports`属性表示当前模块对外输入的接口，其他文件加载该模块就是在读取`module.exports`变量。
+ 为了方便，`node`为每个模块提供一个`exports`变量，指向了`module.exports`，模块内他们大概是这样：
```
    exports = module.exports = {};
```
+ 他们之前用法区别：
```
    // 可以直接给他赋值，可以赋任何值
    module.exports = {
        name: 'feifei',
        sex: 'woman',
        sayName: function (name) {
            console.log(name);
        }
    };

    // exports不能直接赋值，需要给 exports 添加属性，否则 exports 指向的内存做了修改，exports 和 module.exports 不再指向同一块内存，
    exports.name = 'feifei';
    exports.sex = 'woman';
    exports.saName = function (name) {
        console.log(name);
    };

    
```
+ 查看前者暴露接口的对象：
```
    let aa = require('./01module.exports.js'); // module.exports用法
    let bb = require('./02.exports.js'); // exports用方法
```
**优点**：服务器端模块重用，`npm`中模块包多，有将近20万个。<br>
**缺点**：加载模块是同步的。`Node.js`主要用于服务器编程，加载的模块文件一般都存在本地硬盘，加载起来比较快，不用考虑异步加载的方式，因此,`CommonJS`规范比较适用。然而，这并不适合在浏览器环境，同步意味着阻塞加载，浏览器资源是异步加载的，因此有了`AMD` 和 `CMD`解决方案。<br>
**用途**：服务器端的 `Node.js，Browserify`，浏览器端的 `CommonJS` 实现，可以使用 `NPM` 的模块，但是编译打包后的 文件体积可能很大；`modules-webmake`，类似`Browserify`，还不如 `Browserify` 灵活。
#### 1.1.2 AMD <br/>  
+ AMD是"Asynchronous Module Definition"的缩写，意思就是"异步模块定义"。由于`require`是同步的，浏览器端的模块尽量不采用"同步加载"（synchronous），而是采用"异步加载"（asynchronous）。这就是AMD规范诞生的背景。CommonJS是主要为了JS在后端的表现制定的，他是不适合前端的，AMD(异步模块定义)出现了，它就主要为前端JS的表现制定规范。<br>
+ `AMD`也采用`require()`语句加载模块,但是和`CommonJS`不同,需要两个参数：
```
    require([module], callback);
```
+ 如果这种规范的`require`实现上面`require`的代码就需要用到require.js,require.js就是AMD规范实现的一个库,**优点**是实现js文件的异步加载，避免网页失去响应；管理模块之间的依赖性，便于代码的编写和维护。详细参照 [requirejs教程](https://www.runoob.com/w3cnote/requirejs-tutorial-1.html)
```
    /*  
        require.js源码 会定义四个变量：define,require，requirejs，xpcUtil：
              其中require===requirejs,一般使用require更简短；
              define 从名字就可以看出是个api，是用来定义一个模块；
              require加载依赖模块，并执行加载完后的回调函数；
    */
    /*


    */
    /*
        require用法：
        1. require用来加载一个模块，（注意require中的依赖是一个数组，即使只有一个依赖，你也必须使用数组来定义—）
        2. 使用require加载js时，加载模块时不用写.js后缀的，写后缀会报错
        requirejs(["js/a"]); // 等价于requirejs(["js/a"]);
        1. require API的第二个参数是callback，用来处理加载完毕后的逻辑;
            requirejs(["a"], function () {
                alert('a.js加载完毕');
            })
        2. require加载一个文件,require.config用来排至模块加载的位置,可以将地址缩写为jquery;
        3. paths可以配置多个路径，如果远程的cdn没有加载成功，可以加载另一个库;
        4. callback函数中发现有$参数，这个就是依赖的jquery模块的输出变量，如果你依赖多个模块，可以依次写入多个参数使用：
    */
    require.config({
        paths: {
            // 'jquery': ["https://code.jquery.com", "http://libs.baidu.com/jquery/2.0.3/jquery"],
            'jquery': ["http://libs.baidu.com/jquery/2.0.3/jquery"],
            'a': 'js/a'
        }
    });

    require(['jquery', 'a'], function ($) {
        console.log($)
        $(function () {
            alert('jquery 加载完毕');
        });
    });
```

#### 1.1.3 CMD <br/>  
+ seajs，就是遵循他提出的CMD规范，
+ 参考http://blog.chinaunix.net/uid-26672038-id-4112229.html
Sea.js 手册与文档
https://www.zhangxinxu.com/sp/seajs/docs/zh-cn/module-definition.html
慕课手记：
http://www.imooc.com/article/19828

