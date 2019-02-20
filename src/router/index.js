import Vue from 'vue'
import Router from 'vue-router'
import Ad from '@/pages/ad'
import Home from '@/pages/home'
import Complete from '@/pages/complete'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ad',
      component: Ad
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/complete',
      name: 'complete',
      component: Complete
    }
  ]
})
