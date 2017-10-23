import Vue from 'vue'
import Router from 'vue-router'
import BChild from '../BChild.vue'
import Home from '../Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/child',
      name: 'BChild',
      component: BChild
    }
  ]
})
