<template>
  <div>
    <h2>I am home.</h2>
    <p>I am page,hahaha.</p>
    <!-- 路由的嵌套，路由里映射子路由 -->
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return {
      // path变量用于记录离开时的路径
      path: ''
    }
  },
  // 生命周期函数
  created() {
    console.log('Home created.')
  },
  // 生命周期函数
  destroyed() {
    console.log('Home destroyed.')
  },
  // 生命周期函数：当页面活跃时的函数。下面两函数只在组件被保持状态（需使用keep-alive）时才能用
  activated() {
    this.$router.push(this.path);
    console.log('Home activated');
  },
  deactivated() {
    console.log('Home deactivated');
  },
  // 组件内导航守卫
  beforeRouteLeave(to,from,next) {
    console.log(this.$route.path);
    this.path = this.$route.path;
    // 必须调用next()函数
    next();
  }
}
</script>

<style>

</style>