import Vue from 'vue'
import Router from 'vue-router'

import Hemo from '@/pages/home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hemo',
      component: Hemo
    }
  ]
})
