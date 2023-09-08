<template>
  <HomeInventory/>
</template>

<script>
import HomeInventory from './components/HomeInventory.vue'

export default {
  name: 'App',
  components: {
    HomeInventory
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
