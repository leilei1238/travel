import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home.vue'
import City from '../pages/city/City.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/city',
      name: 'city',
      component: City
    }
  ]
})
