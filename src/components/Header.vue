<template>
  <div class="Header">
    <nav class="navbar navbar-default">
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">買い物かご</router-link>
      </div>
      <div class="navbar-header">
        <router-link to="/items" class="navbar-brand">商品一覧</router-link>
      </div>
      <div class="navbar-header">
        <router-link to="/add" class="navbar-brand">商品追加</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: '買い物かごシステム'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
