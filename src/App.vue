<template>
  <div id="app">
    <myheader class="navbar" id="header-navbar"></myheader>
    <div class="container">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
import myheader from 'components/Header'
import itemlist from 'components/ItemList'
export default {
  name: 'app',
  components: {
    myheader,
    itemlist
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
}
body {
  margin: 0;
}
table{
  text-align: left;
}
</style>
