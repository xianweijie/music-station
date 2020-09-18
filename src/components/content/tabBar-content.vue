<template>
  <div>
    <tabbar :dataList='list'></tabbar>
  </div>
</template>

<script>
import tabBar from 'components/common/tabbar/tabBar.vue'
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
          active: false,
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
          listName: 'cart',
          info: '购物车',
          imgSrc: require('@/assets/img/tabbar/cart.svg'),
          imgSrcActive: require('@/assets/img/tabbar/cart_active.svg'),
          active: false,
          path: '/cart'
        },
        {
          listName: 'mine',
          info: '购物车',
          imgSrc: require('@/assets/img/tabbar/mine.svg'),
          imgSrcActive: require('@/assets/img/tabbar/mine_active.svg'),
          active: false,
          path: '/mine'
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
