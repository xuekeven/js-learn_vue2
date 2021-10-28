import Vue from 'vue';

export default {
  decrement(state) {
    state.counter--
  },
  increment(state) {
    state.counter++
  },
  incrementCount(state, payload) {
    console.log(payload);
    console.log(payload.count);
    state.counter += payload.count
  },
  addStudent(state, stu) {
    state.students.push(stu)
  },
  updateInfo(state) {
    // 提交mutation响应规则：

    // 已经初始化的信息可修改后响应式显示。
    state.info.name = 'kai'
    // 想要响应式显示数据，数据须先初始化，使用 Vue 过程中新增数据无法响应式显示，除非使用 Vue.set() 方法。
    // state.info['address'] = '洛杉矶'（不能响应式显示）
    Vue.set(state.info, 'address', '洛杉矶')
    // 删除信息无法响应式显示，除非使用 Vue.delete() 方法。
    // delete state.info.age（不能响应式显示）
    Vue.delete(state.info, 'age')
  },
  updateAsync(state) {
    // 异步操作 action 和 mutation 配合使用
    state.info.name = 'coderwhy'
  }
}