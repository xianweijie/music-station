import { createRouter, createWebHistory } from 'vue-router'
const home = () => (import('../views/home/home.vue'))
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
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
