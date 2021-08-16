<template>
  <div>
    <h2>我是档案组件</h2>
    <!-- 动态路由获取参数 -->
    <h2>{{$route.query.name}}</h2>
    <h2>{{$route.query.age}}</h2>
    <h2>{{$route.query.height}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  // 生命周期函数
  created() {
    console.log('Profile created.')
  },
  // 生命周期函数
  destroyed() {
    console.log('Profile destroyed.')
  }
}
</script>

<style>

</style>