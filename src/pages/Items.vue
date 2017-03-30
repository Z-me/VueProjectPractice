<template>
  <div class="Items">
    <h1>商品一覧</h1>
    <List type='items'></List>
  </div>
</template>

<script>
import List from 'components/List'
export default {
  name: 'list',
  components: {
    List
  }
}
</script>

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
