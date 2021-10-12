
export default {
  powerCounter(state) {
    return state.counter * state.counter;
  },
  more20Student(state) {
    return state.students.filter(s => s.age >= 20)
  },
  more20StudentLength(state,getters) {
    // 通过传入getters，getters的方法可以使用getters的方法
    return getters.more20Student.length
  },
  moreAgeStudent(state) {
    // getters默认不能传递参数, 如果想传递参数, 只能让getters本身返回一个函数
    return function(age) {
      return state.students.filter(s => s.age > age)
    }
  }
}