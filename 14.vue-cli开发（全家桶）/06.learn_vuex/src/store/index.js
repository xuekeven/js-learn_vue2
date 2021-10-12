// 创建Vuex实例，Vuex核心概念：State，Mutation，Getters，Action，Module。

import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import moduleA from './modules/moduleA';

Vue.use(Vuex);

const store = new Vuex.Store({   
  // 以下各个概念内容较多，单独存放为文件，引入使用即可。

  // store中的state用来存放数据状态相关信息，类似data。获取state需使用store实例的state属性。
  // Vuex使用单一状态树，即把所有数据状态都放在一个state。
  state,
  // store中的数据状态更新唯一方式：提交mutation，类似methods。提交mutation需使用store实例的commit()方法。
  // 每个mutation包括两部分：字符串的事件类型和一个回调函数。回调函数的第一个参数就是state。
  // 提交mutation时, 可能会传递参数。参数被称为是mutation的载荷(Payload)。
  // store中的state是响应式的, 当state中的数据发生改变时, Vue组件会自动更新，这要求我们必须遵守些规则，
  // 提交mutation响应规则：1.已经在state初始化过的数据可在修改重新赋值后响应式显示；
  // 2.想要响应式显示数据，数据须先初始化，使用Vue过程中新增数据无法响应式显示，除非使用Vue.set()方法；
  // 3.删除信息无法响应式显示，除非使用Vue.delete()方法。
  // Vuex要求我们mutations中的方法必须是同步方法，原因是当我们使用devtools时, 
  // devtools可以帮助我们捕捉mutation快照，如果是异步操作devtools很难追踪这个操作什么时候完成。
  mutations,
  // store中的数据状态需要经过一些变化才能被用时需要使用getters，类似computed。
  getters,
  // store中的mutation中的方法需要异步操作时需要配合action使用。调用action需使用store实例的dispatch()方法。
  // context是和store对象具有相同方法和属性的对象, 但它们并不是同一个对象。
  // 我们可以通过context去进行commit()方法相关的操作, 也可以获取context.state等。
  // 调用action时, 可能会传递参数。参数被称为是action的载荷(Payload)。
  actions,
  // store应用非常复杂时store会变得臃肿。为解决这个问题, 可将store分割成模块管理。
  modules: {a: moduleA}
});

export default store;