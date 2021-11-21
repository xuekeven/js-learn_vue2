<template>
  <div id="app">

    <h2>--------------------HelloWorld组件内容------------</h2>
    <HelloWorld/>

    <h2>--------------------App组件内容-------------------</h2>

    <!-- 获取state：通过store实例的state属性 -->
    <h3>---获取state：通过store实例的state属性---</h3>
    <p>{{$store.state.counter}}</p>
    <p>{{$store.state.students}}</p>
    <p>{{$store.state.info}}</p>

    <!-- 提交mutation：通过store实例的commit()方法 -->
    <h3>---提交mutation：通过store实例的commit()方法---</h3>
    <p>{{$store.state.counter}}</p>
    <button @click="subtraction()">-</button>
    <button @click="addition()">+</button>

    <!-- 使用getters：通过store实例的getters属性 -->
    <h3>---使用getters：通过store实例的getters属性---</h3>
    <p>{{$store.getters.powerCounter}}</p>
    <p>{{$store.getters.more20Student}}</p>
    <p>{{$store.getters.more20StudentLength}}</p>
    <!-- getters默认不能传递参数且使用时不能加括号, 这里是调用的getters返回了一个函数 -->
    <p>{{$store.getters.moreAgeStudent(16)}}</p>

    <!-- 提交mutation：传递参数 -->
    <h3>---提交mutation：传递参数---</h3>
    <p>{{$store.state.counter}}</p>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent()">添加学生</button>

    <!-- 提交mutation：响应规则 -->
    <h3>---提交mutation：响应规则---</h3>
    <p>{{$store.state.info}}</p>
    <button @click="updateInfo()">响应规则更新信息</button>

    <!-- 异步操作action和mutation配合使用 -->
    <h3>---异步操作action和mutation配合使用---</h3>
    <p>{{$store.state.info}}</p>
    <button @click="updateAsync()">异步更新信息</button>

    <!-- 使用module -->
    <h3>---使用module---</h3>
    <!-- 获取模块中state -->
    <p>---获取模块中state---</p>
    <p>{{$store.state.a.name}}</p>
    <!-- 使用模块中getters -->
    <p>---使用模块中getters---</p>
    <p>{{$store.getters.fullname}}</p>
    <p>{{$store.getters.fullname2}}</p>
    <p>{{$store.getters.fullname3}}</p>
    <!-- 提交模块中mutation -->
    <p>---提交模块中mutation---</p>
    <button @click="updateName()">修改名字</button>
    <!-- 模块中异步操作 -->
    <p>---模块中异步操作---</p>
    <button @click="updateNameAsync()">异步修改名字</button>
    </div>

</template>

<script>

import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  data() {
    return {
      message: '我是App组件',
    }
  },
  components: {
    HelloWorld,
  },
  methods: {
    // 提交mutation：通过store实例的commit()方法
    // 普通提交风格
    subtraction() {
      this.$store.commit('decrement')
    },
    addition() {
      this.$store.commit('increment')
    },
    // 提交mutation：传递参数
    addCount(count) {
      // 普通提交风格
      // this.$store.commit('incrementCount',count)
      // 特殊提交风格，以对象的形式传递
      this.$store.commit({
        type: 'incrementCount',
        count
      })
    },
    addStudent() {
      const student = {name: 'kai', age: 17}
      this.$store.commit('addStudent', student)
    },
    // 提交mutation：响应规则
    updateInfo() {
      this.$store.commit('updateInfo')
    },
    // 异步操作action和mutation配合使用
    updateAsync() {
      this.$store.dispatch('actUpdateAsync','我是携带的信息')
      // 返回Promise
      .then(res => {
        console.log('里面提交成功');
        console.log(res)
      })
      .catch(res => {
        console.log('里面提交失败');
        console.log(res)
      })
    },
    // 使用module
    // 提交模块中mutation
    updateName() {
      this.$store.commit('updateName','lisi')
    },
    // 模块中异步操作
    updateNameAsync() {
      this.$store.dispatch('actUpdateName')
    }
  }
}

</script>

<style scoped>
h2 {
  color: brown;
}
h3 {
  color: blueviolet;
}
</style>
