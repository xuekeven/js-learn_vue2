
export default {
  state: {
    name: 'zhangsan'
  },
  getters: {
    fullname(state) {
      return state.name + '11111'
    },
    // 传入的getters也包含总部的getters，可以任意使用
    fullname2(state, getters) {
      console.log(state);
      console.log(getters);
      return getters.fullname + '22222'
    },
    // 传入总部的state：rootstate
    fullname3(state, getters,rootstate) {
      console.log(rootstate);
      return getters.fullname2 + rootstate.counter
    },
  },
  mutations: {
    updateName(state,payload) {
      // 这里不用state.a.name
      state.name = payload
    }
  },
  actions: {
    // getters中也可以使用context
    actUpdateName(context) {
      console.log(context);
      setTimeout(() => {
        context.commit('updateName','wangwu')
      },1000)
    }
  }
}