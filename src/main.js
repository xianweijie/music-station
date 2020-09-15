import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './assets/css/base.css'

createApp(App).use(router).mount('#app')
document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
