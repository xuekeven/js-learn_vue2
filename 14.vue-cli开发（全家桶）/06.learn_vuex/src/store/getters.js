export default {
  powerCounter(state) {
    return state.counter * state.counter;
  },
  more20Student(state) {
    return state.students.filter(s => s.age >= 20)
  },
  more20StudentLength(state, getters) {
    // 通过传入 getters，getters 的方法可以使用 getters 的方法
    return getters.more20Student.length
  },
  moreAgeStudent(state) {
    // getters 默认不能传递参数，如果想传递参数，只能让 getters 本身返回一个函数
    return function(age) {
      return state.students.filter(s => s.age > age)
    }
  }
}