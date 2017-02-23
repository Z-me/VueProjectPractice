<template>
  <div class="Items">
    <router-link to="/">買い物かご</router-link>
    <List type='items'></List>
  </div>
</template>

<script>
import List from 'components/List'
export default {
  name: 'list',
  components: {
    List
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
