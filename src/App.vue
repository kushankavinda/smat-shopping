<template>
  <div id="app">
    <HelloWorld msg="Smart Shopping"/> 
    <allItems/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import allItems from './components/allItems.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    allItems
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
