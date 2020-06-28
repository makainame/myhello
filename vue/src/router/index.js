import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Shop from '@/components/Shop'
import List from '@/components/List'
import Dele from '@/components/Dele'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/list',
      name: 'HelloWorld',
      component: List
    },
    {
      path: '/shop',
      name: 'HelloWorld',
      component: Shop
    },
    {
      path: '/dele',
      component: Dele
    }
  ]
})
