<template>
  <div class="List">
    
    <table>
      <thead>
        <tr>
          <th></th><th>商品名</th><th>価格</th><th colspan="4" v-if="type==='items'">操作</th>
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
          <td v-if="type==='items'">
            <div class="input-group">
              <span class="input-group-addon">購入個数</span>
              <input type="number" class="form-control" v-model='item.buy' min="0" v-bind:max='item.number'>
              <span class="input-group-addon">個</span>
            </div>
          </td><td v-if="type==='items'">
           
            <button id="show-modal" @click="item.showModal = true">Show Modal</button>
            <Modal v-if="item.showModal" @close="item.showModal = false">
              <h3 slot="header">{{item.name}}</h3>
              <table slot="body">
                <tr>
                  <td rowspan="3">
                    <img :src='item.imageURL' width="100%"/>
                  </td>
                  <th>価格</th>
                  <td>
                    <h3>{{item.value}}</h3>
                  </td>
                </tr>
                <tr>
                  <th>販売個数</th>
                  <td>
                    <h3>{{item.number}}</h3>
                  </td>
                </tr>
                <tr>
                  <th>詳細</th>
                  <td>
                    <p>{{item.detail}}</p>
                  </td>
                </tr>
              </table>
            </Modal>
            
          </td><td v-if="type==='items'">
            <button v-on:click="pushBasket(item)">買い物かごへ</button>
          </td><td v-if="type==='items'">
            <button v-on:click="deleteItem(item)">削除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <pre>{{items}}</pre>
  </div>
</template>

<script>
import Firebase from 'firebase'
import Modal from 'components/Modal'
export default {
  name: 'ItemList',
  data () {
    return {
      items: []
    }
  },
  props: ['type'],
  components: {
    Modal
  },
  mounted () {
    // 商品の追加
    this.$nextTick(function () {
      let firebase = new Firebase('https://practice-9a9dd.firebaseio.com')
      if (this.type === 'items') {
        firebase.child('shopping').on('child_added', (datas) => {
          let data = datas.val()
          data.id = datas.key()
          data.showModal = false
          this.items.unshift(data)
        })
      } else {
        firebase.child('basket').on('child_added', (datas) => {
          let data = datas.val()
          data.id = datas.key()
          data.showModal = false
          this.items.unshift(data)
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
