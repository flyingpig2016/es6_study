# es6_study

---
    书山有路皆美景!
---

## 1. 概述

### 1.1 规范分类 <br/>
 &emsp;&emsp;在 ES6 之前，社区制定了一些模块加载方案，最主要的有 CommonJS 和 AMD 两种, 前者用于服务器，后者用于浏览器。

#### 1.1.1 Common JS <br/>
+ node.js的模块系统，就是参照 `CommonJS `规范实现的,一个单独文件就是一个模块，`module`变量代表当前模块，是一个对象；`nodejs` 通过`require` 方法来同步加载要依赖的模块，然后通过`extports` 属性即 `module.exports` 来导出需要暴露的接口。
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


**优点**：服务器端模块重用，NPM中模块包多，有将近20万个。<br>
**缺点**：加载模块是同步的。Node.js主要用于服务器编程，加载的模块文件一般都存在本地硬盘，加载起来比较快，不用考虑异步加载的方式，因此,CommonJS规范比较适用。然而，这并不适合在浏览器环境，同步意味着阻塞加载，浏览器资源是异步加载的，因此有了AMD 和 CMD解决方案。<br>
**用途**：服务器端的 Node.js；Browserify，浏览器端的 CommonJS 实现，可以使用 NPM 的模块，但是编译打包后的 文件体积可能很大；modules-webmake，类似Browserify，还不如 Browserify 灵活；
+ AMD <br>
&emsp;&emsp;AMD是"Asynchronous Module Definition"的缩写，意思就是"异步模块定义"。由于`require`是同步的，浏览器端的模块尽量不采用"同步加载"（synchronous），而是采用"异步加载"（asynchronous）。这就是AMD规范诞生的背景。CommonJS是主要为了JS在后端的表现制定的，他是不适合前端的，AMD(异步模块定义)出现了，它就主要为前端JS的表现制定规范。<br>
**核心接口** <br>
    define(id?, dependencies?, factory)它要在声明模块的时候指定所有的依赖 dependencies ，并且还要当做形参传到factory 中，对于依赖的模块提前执行，依赖前置。
    ```
        define("module", ["dep1", "dep2"], function(d1, d2) {
            return someExportedValue;
        });

        require(["module", "../file"], function(module, file) {
        });
        
    ```
