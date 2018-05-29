import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/pages/HelloWorld'
import Home from '@/pages/home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '*',
      name: 'Home',
      component: Home
    }
  ]
})
