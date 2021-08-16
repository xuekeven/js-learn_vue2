import Vue from 'vue';

// 直接创建实例即可，不用赋值
new Vue({
    el:'#app',
    // 定义使用template属性后，template属性内的内容将自动替换id=app的标签
    template: `<h2>{{message}}</h2>`,
    data: {
        message: 'hello vue and webpack!'
    }
})