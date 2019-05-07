<template>
  <div>
    <ld />
  </div>
</template>

<script>
import ld from './components/LuckDraw.vue'

export default {
  name: 'app',
  components: {
    ld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
