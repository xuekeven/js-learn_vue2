<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户内容，嘿嘿嘿</p>
    <!-- 动态路由获取参数 -->
    <h2>{{$route.params.id}}</h2>
    <h2>{{userId}}</h2>
    <button @click="btnclick()">按钮</button>
  </div>
</template>

<script>
export default {
  name: 'User',
  computed: {
    userId() {
      // 动态路由组件内获取参数
      return this.$route.params.id;
    }
  },
  methods: {
    // 所有的组件都继承自Vue的原型
    btnclick() {
      console.log(this.$router);
      console.log(this.$route);
    }
  },
  // 生命周期函数
  created() {
    console.log('User created.')
  },
  // 生命周期函数
  destroyed() {
    console.log('User destroyed.')
  }
}
</script>

<style>

</style>