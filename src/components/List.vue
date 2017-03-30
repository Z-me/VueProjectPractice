<template>
  <div class="List">
    
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th></th><th>商品名</th><th>価格</th><th v-if="type==='basket'">個数</th><th v-if="type==='items'">操作</th>
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
          <td v-if="type==='basket'">
            {{item.buy}}
          </td>
          <td v-if="type==='items'">
            <div class="input-group">
              <span class="input-group-addon">購入個数</span>
              <input type="number" class="form-control" v-model='item.buy' min="0" v-bind:max='item.number'>
              <span class="input-group-addon">個</span>
            </div>
          </td><td v-if="type==='items'">
            <div class="btn-group" role="group" aria-label="...">
              <button type="button" class="btn btn-info" id="show-modal" @click="item.showModal = true">詳細</button>  
              <Modal v-if="item.showModal" @close="item.showModal = false">
                <h3 slot="header">{{item.name}}</h3>
                <Detail type='detail' v-bind:item-id='item.id' slot="body"></Detail>
              </Modal>
              <button type="button" class="btn btn-default" v-on:click="pushBasket(item)">買い物かごへ</button>
              <button type="button" class="btn btn-danger" v-on:click="deleteItem(item)">削除</button>
            </div>
            
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
import Detail from 'components/Detail'
export default {
  name: 'ItemList',
  data () {
    return {
      items: []
    }
  },
  props: ['type'],
  components: {
    Modal,
    Detail
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

<style scoped>
pre {
  text-align: left;
}
</style>
