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
import Firebase from 'firebase'
export default {
  name: 'ItemList',
  data () {
    return {
      msg: '商品リスト',
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

</style>
