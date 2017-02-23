import Vue from 'vue'
import Router from 'vue-router'
import Items from 'pages/Items'
import Baskets from 'pages/Baskets'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Baskets',
      component: Baskets
    },
    {
      path: '/items',
      name: 'Items',
      component: Items
    }
  ]
})
