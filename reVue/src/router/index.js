import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/router/home/Home'
import City from '@/router/city/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: "City",
      component: City
    }
  ]
})
