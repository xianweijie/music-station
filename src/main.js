import Vue from 'vue'
import Router from 'vue-router'
import router from './router/index.js'
import App from './App.vue'
import { Tabbar, TabItem, Swipe, SwipeItem, Spinner } from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/css/base.css'

/* eslint-disable */

Vue.config.productionTip = false
Vue.use(Router)
// mint-ui组件全局注册
Vue.component('ui-tabbar', Tabbar)
Vue.component('ui-tabbar-item', TabItem)
Vue.component('ui-swipe', Swipe)
Vue.component('ui-swipe-item', SwipeItem)
Vue.component('ui-spinner', Spinner)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
Vue.use(router)
document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px'
