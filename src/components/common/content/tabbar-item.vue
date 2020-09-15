<template>
    <slot name="barItems" :itemInfo="list"></slot>
</template>

<script>
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
    $route (to, from) {
      this.list.map((item) => {
        if (to.path.indexOf(item.path) !== -1) {
          item.active = true
        } else {
          item.active = false
        }
      })
    }
  }
}
</script>
<style>
.tab-bar-item-img{
  width:0.5rem;
}
.tab-bar-item-img + p{
  margin:0;
}
.text-active{
  color:#d4237a;
}
</style>
