<template>
  <tabbar :dataList='list'></tabbar>
</template>

<script>
import tabBar from './TabBar.vue'
export default {
  name: 'tabBar-item',
  data () {
    return {
      list: [
        {
          listName: 'home',
          info: '主页',
          imgSrc: require('@/assets/img/tabbar/home.svg'),
          imgSrcActive: require('@/assets/img/tabbar/home_active.svg'),
          active: true,
          path: '/home'
        },
        {
          listName: 'classify',
          info: '分类',
          imgSrc: require('@/assets/img/tabbar/classify.svg'),
          imgSrcActive: require('@/assets/img/tabbar/classify_active.svg'),
          active: false,
          path: '/classify'
        },
        {
          listName: 'follow',
          info: '关注',
          imgSrc: require('@/assets/img/tabbar/follow.svg'),
          imgSrcActive: require('@/assets/img/tabbar/follow_active.svg'),
          active: false,
          path: '/follow'
        }
      ]
    }
  },
  watch: {
  },
  components: {
    tabbar: tabBar
  }
}
</script>
<style>
</style>
