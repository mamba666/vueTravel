// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入vuex
import store from "./store"

//引入需要的css
import "styles/reset.css"
import "styles/border.css"
import "styles/iconfont.css"
import "swiper/dist/css/swiper.css"

import "styles/iconfont.js"

//引入需要的插件
import fastClick from "fastclick"
import VueAwesomeSwiper from "vue-awesome-swiper"

Vue.config.productionTip = false
//使用fastClick
fastClick.attach(document.body)
// 使用vue-awesome-swiper插件
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
