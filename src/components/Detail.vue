<template>
  <div class="Detail">
    <div class="container">
      <form v-if="type==='input'" class="form-horizontal">
        <div class="form-group">
          <label class="col-sm-2 control-label" for="inputName">商品名</label>
          <div class="col-sm-10">
            <input type="text" id="inputName" class="form-control" placeholder="(例)リンゴのパソコン" v-model="newItem.name">
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label" for="inputDetail">詳細説明</label>
          <div class="col-sm-10">
            <textarea id="inputDetail" class="form-control" placeholder="(例)このパソコンは凄いです。どれくらい凄いかは買ってみないとわからない。" v-model="newItem.detail" rows="4"></textarea>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label" for="itemValue">価格</label>
          <div class="col-sm-10">
            <div class="input-group">
              <input type="number" id="itemValue" class="form-control" placeholder="(例)24000" v-model="newItem.value">
              <span class="input-group-addon">円</span>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label" for="itemNumber">在庫数</label>
          <div class="col-sm-10">
            <div class="input-group">
              <input type="number" id="itemNumber" class="form-control" placeholder="(例)54" v-model="newItem.numbre">
              <span class="input-group-addon">個</span>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label" for="inputIMG">商品画像</label>
          <div class="col-sm-10">
            <input type="url" id="inputIMG" class="form-control" placeholder="(例)http://www.hogehoge.com/img/huga.jpg" v-model="newItem.imageURL">
          </div>
        </div>
        <div class="form-group">
          <button type="button" class="btn btn-primary btn-lg">商品追加</button>
        </div>
      </form>
    </div>
    
    <hr v-if="type==='input'">
    <div class="preview">
      <div v-if="type==='input'">
        <h2 v-if="type==='input'">プレビュー</h2>
      </div>
      <table class="table table-striped table-hover col-ms-12">
        <tr>
          <td class="col-sm-4" rowspan="4">
            <img v-if="type==='input'" :src='newItem.imageURL' width="100%"/>
            <img v-else :src='item.imageURL' width="100%"/>
          </td>
          <th>商品名</th>
          <td class="col-sm-6">
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
        detail: '',
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

<style scoped>
.preview{
  margin: 40px;
}
form{
  margin: 20px;
}
pre {
  text-align: left;
}
</style>
