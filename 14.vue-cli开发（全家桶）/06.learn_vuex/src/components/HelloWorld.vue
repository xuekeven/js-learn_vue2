<template>
  <div class="hello">
    <p>{{$store.state.counter}}</p>
    <p>{{$store.getters.more20Student}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
  },
  data () {
    return {
      
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
