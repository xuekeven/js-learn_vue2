<template>
  <div id="app">
    <button @click="requestone()">发送网络请求</button>
  </div>
</template>

<script>
import {request} from './network/request';
import {requests} from './network/requests';

export default {
  name: 'App',
  methods: {
    requestone() {
      // 使用封装的instance实例
      requests({
      url: 'home/data',
      params: {
        type: 'sell',
        page: 5
      }
    })
    }
  }
}
</script>

<style>

</style>
