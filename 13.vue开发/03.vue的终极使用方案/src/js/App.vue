<template>
  <div>
    <h2 >{{ message }}</h2>
    <button @click="btnClick">按钮</button>
    <Cpn></Cpn>
  </div>
</template>

<script>
import Cpn from './Cpn.vue';

export default {
  name:'App',
  data() {
    return {
      message: 'hello vue and webpack!终于成功了'
    }
  },
  methods: {
    btnClick() {
      console.log('123123');
    }
  },
  components: {
    Cpn
  }
}
</script>

<style scoped>

</style>