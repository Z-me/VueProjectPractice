<template>
  <div id="app">
    <myheader></myheader>
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
import myheader from 'components/Header'
export default {
  name: 'app',
  components: {myheader}
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
