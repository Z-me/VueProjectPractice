<template>
  <div class="ItemList">
    <router-link to="/items">商品一覧</router-link>
    <h1>{{msg}}</h1>
    <Detail type='input'></Detail>
  </div>
</template>

<script>
import Detail from 'components/Detail'
export default {
  name: 'AddItem',
  components: {
    Detail
  },
  data () {
    return {
      msg: '商品追加'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  table {
    border-collapse: collapse;
	text-align: left;
	line-height: 1.5;
	border-top: 1px solid #ccc;
	border-bottom: 1px solid #ccc;
  }
  thead th {
	width: 150px;
	padding: 10px;
	font-weight: bold;
	vertical-align: top;
	color: #fff;
	background: darkslateblue;
  }
  td {
	width: 350px;
	padding: 10px;
	vertical-align: top;
  }
  tr:nth-child(odd) td {
    background-color: white;
  }
  tr:nth-child(even) td {
    background-color: #C9ABFF;
  }
</style>
