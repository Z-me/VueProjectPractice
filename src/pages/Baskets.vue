<template>
  <div class="ItemList">
    <router-link to="/items">商品一覧</router-link>
    <h1>{{msg}}</h1>
    <List type="basket"></List>
  </div>
</template>

<script>
import Firebase from 'firebase'
import List from 'components/List'
export default {
  name: 'ItemList',
  components: {
    List
  },
  data () {
    return {
      msg: '買い物かご',
      items: []
    }
  },
  mounted () {
    // 商品の追加
    this.$nextTick(function () {
      let firebase = new Firebase('https://practice-9a9dd.firebaseio.com')
      firebase.child('shopping').on('child_added', (datas) => {
        let data = datas.val()
        data.id = datas.key()
        this.items.unshift(data)
      })
    })
  }
}
</script>

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
