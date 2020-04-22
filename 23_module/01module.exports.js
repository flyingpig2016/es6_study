// module.exports 提供了暴露接口的方法，
module.exports = {
    name: 'feifei',
    sex: 'woman',
    sayNam: function (name) {
        console.log(name);
    }
};
console.log(module);
console.log(module.exports);
console.log(exports);