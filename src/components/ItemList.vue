<template>
  <div class="ItemList">
    <h1>{{msg}}</h1>
    <table>
      <thead>
        <tr>
          <th></th><th>商品名</th><th>価格</th><th>個数</th><th colspan="3">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items">
          <td>
            <img :src='item.imageURL' width="100px"/>
          </td>
          <td>
            {{item.name}}
          </td>
          <td>
            {{item.value}}
          </td>
          <td>
            {{item.number}}
          </td>
          <td>
            <input v-model='item.buy' type="number" min="0" v-bind:max='item.number'>
          </td><td>
            <button v-on:click="pushBasket(item)">買い物かごへ</button>
          </td><td>
            <button v-on:click="deleteItem(item)">削除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// 接続処理
// var baseURL = 'https://practice-9a9dd.firebaseio.com'
/* setTimeout(function () {
  var firebase = new Firebase(baseURL)
}, 100)
*/
// var DB = firebase.child('shopping')
export default {
  name: 'ItemList',
  data () {
    return {
      msg: '商品リスト',
      items: [
        {
          name: 'リンゴのパソコン',
          value: 1288000,
          imageURL: 'http://a-graph.jp/wp-content/uploads/2015/07/MACBOOKPRO.jpg',
          number: 97,
          buy: 0
        },
        {
          name: 'リンゴのテレビ',
          value: 17052,
          imageURL: 'http://store.storeimages.cdn-apple.com/8561/as-images.apple.com/is/image/AppleInc/aos/published/images/a/pp/apple/tv/apple-tv-hero-select-201510?wid=538&hei=535&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=vWwkV0',
          number: 55,
          buy: 0
        }
      ]
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
