<template>
  <swiper :dataList="list" :hasData="hasData"></swiper>
</template>

<script>
import swiper from 'components/common/swiper/Swiper.vue'
export default {
  data () {
    return {
      hasData: false,
      list: [
        // pair为图片引入路径，routerLink为路由跳转地址
        {
          name: 'prir01',
          pair: require('@/assets/img/swiper/01.jpeg'),
          routerLink: 'http://www.baidu.com'
        },
        {
          name: 'prir02',
          pair: require('@/assets/img/swiper/02.jpg'),
          routerLink: 'http://www.baidu.com'
        },
        {
          name: 'prir03',
          pair: require('@/assets/img/swiper/03.jpg'),
          routerLink: 'http://www.baidu.com'
        },
        {
          name: 'prir04',
          pair: require('@/assets/img/swiper/04.jpg'),
          routerLink: 'http://www.baidu.com'
        }
      ]
    }
  },
  mounted () {
    // 模拟请求图片数据时LOADING图标
    const _this = this
    setTimeout(() => {
      _this.hasData = true
    }, 2000)
  },
  components: {
    swiper
  }
}
</script>

<style scoped>
.swiper_box{
  height: 160px;
  box-shadow: 0 2px rgba(105,105,105,0.3);
}
</style>
