// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Firebase from 'firebase'
// const firebase = new Firebase('https://practice-9a9dd.firebaseio.com')
// var DB = firebase.child('shopping')
// console.table(DB)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
