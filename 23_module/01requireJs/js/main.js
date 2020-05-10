require.config({
    // data-main不使用的时候用baseUrl
    baseUrl: 'js/',
    paths: {
        'jquery': ['http://libs.baidu.com/jquery/2.0.3/jquery', 'jquery'],
        'a': 'a'
    },
    // 通过过require加载的模块一般都需要符合AMD规范即使用define来生命模块；
    // 但是有时候需要加载非AMD规范的js，这时候就需要用到：shim，shim直接翻译为"垫"；
    // 例如我要是用underscore类库，但是他并没有实现AMD规范，我们就这样配置
    shim: {
        'underscore': {
            exports: '_'
        }
    }, 'jquery.form': {
        deps: ['jquery']
    }
});