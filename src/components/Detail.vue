<template>
  <div class="Detail">
    <div class="row">
      <form class="form-inline" v-if="type==='input'">
        <label class="sr-only" for="inputName">商品名</label>
        <div class="input-group mb-2 mr-sm-2 mb-sm-0 col-md-3 col-ms-3">
          <span class="input-group-addon">商品名</span>
          <input type="text" id="inputName" class="form-control" placeholder="(例)リンゴのパソコン" v-model="newItem.name">
        </div>
        
        <label class="sr-only" for="value">価格</label>
        <div class="input-group mb-2 mr-sm-2 mb-sm-0 col-md-3 col-ms-3 col-md-offset-1">
          <span class="input-group-addon">価格</span>
          <input type="url" id="inputIMG" class="form-control" placeholder="(例)24000" v-model="newItem.value">      
          <span class="input-group-addon">円</span>
        </div>
        
        <label class="sr-only" for="value">在庫数</label>
        <div class="input-group mb-2 mr-sm-2 mb-sm-0 col-md-3 col-ms-3 col-md-offset-1">
          <span class="input-group-addon">在庫数</span>
          <input type="url" id="inputIMG" class="form-control" placeholder="(例)54" v-model="newItem.numbre">
          <span class="input-group-addon">個</span>
        </div>
        
        <label class="sr-only" for="inputIMG">商品画像</label>
        <div class="input-group mb-2 mr-sm-2 mb-sm-0 col-md-11 col-ms-11">
          <span class="input-group-addon">画像URL</span>
          <input type="url" id="inputIMG" class="form-control" placeholder="(例)http://www.hogehoge.com/img/huga.jpg" v-model="newItem.imageURL">      
        </div>
        <div class="centor-block mb-2 mr-sm-2 mb-sm-0 col-md-12 col-ms-12">
          <button type="button" class="btn btn-primary btn-lg">商品追加</button>
        </div>
      </form>
      
      <div class="col-md-3" v-if="type==='input'">
        <h2 v-if="type==='input'">プレビュー</h2>
      </div>
      <table>
        <tr>
          <td rowspan="4">
            <img v-if="type==='input'" :src='newItem.imageURL' width="100%"/>
            <img v-else :src='item.imageURL' width="100%"/>
          </td>
          <th>商品名</th>
          <td>
            <h3 v-if="type==='input'">{{newItem.name}}</h3>
            <h3 v-else>{{item.name}}</h3>
          </td>
        </tr>
        <tr>
          <th>価格</th>
          <td>
            <h3 v-if="type==='input'">{{newItem.value}}</h3>
            <h3 v-else>{{item.value}}</h3>
          </td>
        </tr>
        <tr>
          <th>販売個数</th>
          <td>
            <h3 v-if="type==='input'">{{newItem.number}}</h3>
            <h3 v-else>{{item.number}}</h3>
          </td>
        </tr>
        <tr>
          <th>詳細</th>
          <td>
            <p v-if="type==='input'">{{newItem.detail}}</p>
            <p v-else>{{item.detail}}</p>
          </td>
        </tr>
      </table>
      
    </div>
    
  </div>
</template>

<script>
import Firebase from 'firebase'
let firebase = new Firebase('https://practice-9a9dd.firebaseio.com')
export default {
  name: 'ItemList',
  data () {
    return {
      item: [],
      newItem: {
        name: '',
        value: 0,
        number: 0,
        imageURL: ''
      },
      msg: ''
    }
  },
  props: [
    'type',
    'itemId'
  ],
  mounted () {
    // 商品の追加
    this.$nextTick(function () {
      if (this.type === 'input') {
        firebase.child('shopping').on('child_added', (datas) => {
          let data = datas.val()
          data.id = datas.key()
          // this.items.unshift(data)
          this.newItem = data
        })
      } else {
        console.log(this.itemId)
        firebase.child('shopping').child(this.itemId).on('value', (datas) => {
          let data = datas.val()
          data.id = datas.key()
          this.item = data
          console.log(this.item)
        })
      }
    })
  },
  methods: {
    pushBasket: function (item) { // TODO: 買い物かごに追加する処理を実装
      console.log(item)
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
  pre {
    text-align: left;
  }
</style>
