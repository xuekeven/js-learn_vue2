// 创建 Vuex 实例分 4 步：
// 1. 注入插件；2. 设置数据状态；3. 创建 Vuex 实例；4. 传出 Vuex 实例。
// Vuex 有五个核心概念：State，Mutation，Getters，Action，Module。

import Vue from 'vue';
import Vuex from 'vuex';

// 1. 注入插件。
Vue.use(Vuex);

// 2. 设置数据状态。
import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import moduleA from './modules/moduleA';

// 3. 创建 Vuex 实例。
const store = new Vuex.Store({   
  // 以下各个概念内容较多，单独存放为文件，引入使用即可。

  // (1) store 中的 state 用来存放数据状态相关信息，类似 data。获取 state 需使用 store 实例的 state 属性。
  // Vuex 使用单一状态树，即把所有数据状态都放在一个 state。
  state,
  // (2) store 中的数据状态更新唯一方式：提交 mutation，类似 methods。提交 mutation 时，
  // 需使用 store 实例的 commit() 方法。每个 mutation 包括两部分：字符串的事件类型和一个回调函数。
  // 回调函数的第一个参数就是 state。提交 mutation 时，可能会传递参数。参数被称为是 mutation 的载荷（Payload）。
  // store 中的 state 是响应式的，当 state 中的数据发生改变时，Vue 组件会自动更新，这要求我们必须遵守些规则。
  // 提交 mutation 响应规则：
  // ① 已经在 state 初始化过的数据可在修改重新赋值后响应式显示；
  // ② 想要响应式显示数据，数据须先初始化，使用 Vue 过程中新增数据无法响应式显示，除非使用 Vue.set() 方法；
  // ③ 删除信息无法响应式显示，除非使用 Vue.delete() 方法。
  // Vuex 要求我们 mutations 中的方法必须是同步方法，原因是当我们使用 devtools 时，它可以
  // 帮助我们捕捉 mutation 快照，如果是异步操作 devtools 很难追踪这个操作什么时候完成。
  mutations,
  // (3) store 中的数据状态需要经过一些变化才能被用时需要使用 getters，类似 computed。
  getters,
  // (4) store 中的 mutation 中的方法需要异步操作时需要配合 action 使用。调用 action 时，
  // 需使用 store 实例的 dispatch() 方法。context 是和 store 对象具有相同方法和属性的对象，但它们并不是同一个对象。
  // 我们可以通过 context 去进行 commit() 方法相关的操作，也可以获取 context.state 等。
  // 调用 action 时，可能会传递参数。参数被称为是 action 的载荷（Payload）。
  actions,
  // (5) store 应用非常复杂时 store 会变得臃肿。为解决这个问题，可将 store 分割成模块管理。
  modules: {a: moduleA}
});

// 4. 传出 Vuex 实例。
export default store;