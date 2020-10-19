<template>
  <swiper :dataList="list" :hasData="hasData"></swiper>
</template>

<script>
import swiper from './Swiper.vue'
import { swiperData } from 'network/home/homeRequestData.js'
export default {
  data () {
    return {
      hasData: false,
      list: []
    }
  },
  created () {
    swiperData({}).then(res => {
      this.list = res
      this.hasData = true
    })
  },
  components: {
    swiper
  }
}
</script>

<style scoped>
.swiper_box{
  height: 24vh;
  box-shadow: 0 2px rgba(163, 163, 163, 0.3);
}
</style>
