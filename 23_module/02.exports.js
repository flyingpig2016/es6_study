// module.exports = {
//     name: 'feifei',
//     sex: 'woman',
//     sayName: function (name) {
//         console.log(name);
//     }
// };
// 在模块内部大概是这样 exports = module.exports = {};
// 区别是exports不能直接赋值，需要给 exports 添加属性，否则 exports 指向的内存做了修改，exports 和 module.exports 不再指向同一块内存，
//  module.export可以直接给他赋值
exports.name = 'feifei';
exports.sex = 'woman';
exports.saName = function (name) {
    console.log(name);
};
console.log(module);
console.log(module.exports);
console.log(exports);