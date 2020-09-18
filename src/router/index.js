import Router from 'vue-router'
import home from '../views/home/home.vue'
const classify = () => (import('../views/classify/classify.vue'))
const cart = () => (import('../views/cart/cart.vue'))
const mine = () => (import('../views/mine/mine.vue'))

const routes = [
  // 任何根路径下为空的路径都重定向到/home
  { path: '', redirect: '/home' },
  { path: '/home', component: home },
  { path: '/classify', component: classify },
  { path: '/cart', component: cart },
  { path: '/mine', component: mine }
]
const router = new Router({
  mode: 'history',
  routes
})
export default router
