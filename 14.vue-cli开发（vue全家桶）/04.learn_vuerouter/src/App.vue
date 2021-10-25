<template>
  <div id="app"> 

  <!-- Vue Router有两种跳转方式：使用<router-link>标签和手写路由代码跳转。 -->
  <!-- 第一种跳转方式：使用<router-link>标签，该标签是Vue Router中已经内置的组件。
      该标签默认会被渲染成<a>标签，to属性用于指定跳转的路径，tag属性用于指定为其他标签。
      replace属性不会留下history记录，指定replace，点击后退键不能返回到上一个页面。
      当该标签对应的路由匹配成功时，Vue Router会自动给当前匹配成功跳转的标签添加设置
      其为router-link-active类，active-class属性用于修改为指定类。也可在router实例中修改。 -->
    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>

    <!-- 动态路由：使用params类型传递参数（第一种跳转方式） -->
    <router-link :to="'/user/'+userId">用户</router-link>
    <!-- 动态路由：使用query类型传递参数（第一种跳转方式） -->
    <router-link :to="{path: '/profile',query:{name: 'why',age: 18,height: '1.88m'}}">档案</router-link>

  <!-- 第二种跳转方式：手写路由代码跳转，需要标签配合方法。 -->
  <!-- <button @click="linkToHome()">首页</button> -->
  <!-- <button @click="linkToAbout()">关于</button> -->
  <!-- <button @click="linkToUser()">我的</button> -->
  <!-- <button @click="linkToProfile()">档案</button> -->

  <!-- <keep-alive>标签要求其包含的组件缓存保留历史状态，避免返回后从头重新渲染。
      exclude属性可以要求其属性值组件不缓存不保留历史状态。  -->
  <!-- 两种跳转方式都要用到<router-view>标签。该标签会根据当前路径动态渲染路由组件。
    网页的其他内容（<router-view>标签之前和之后的标签, 如上面的跳转按钮和底部的版权信息），
    和该标签处于同个等级，不会随着渲染路由改变而改变。路由切换的是<router-view>挂载的组件。 -->
  <keep-alive exclude="Profile,User">
    <router-view/>
  </keep-alive>

  <div>版权所有</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'lisi'
    }
  },
  methods: {
    // 第二种跳转方式：手写路由代码跳转，需要标签配合方法。
    linkToHome() {
      // 不能直接跳转，需要通过路由实例$router
      // 使用push方法（后退键能返回到上一个页面）
      this.$router.push('/home')
    },
    linkToAbout() {
      // 使用replace方法（后退键不能返回到上一个页面）
      this.$router.replace('/about')
    },
    // 动态路由：使用params类型传递参数（第二种跳转方式）
    linkToUser() {
      this.$router.push('/user/'+ this.userId)
    },
    // 动态路由：使用query类型传递参数（第二种跳转方式）
    linkToProfile() {
      this.$router.push({path: '/profile', query:{name: 'kebo', age: 19, height: '1.8m'}})
    }
  }
}
</script>

<style scoped>
  .actived {
    color: #f00;
  }
</style>