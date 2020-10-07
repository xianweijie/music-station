<template>
  <weekrecommend :list="dataList"></weekrecommend>
</template>

<script>
import weekrecommend from './Week-Recommend.vue'
// 接口
import { weekRequeseData } from 'network/home/homeRequestData.js'
export default {
  name: 'weekRecommendContent',
  data () {
    return {
      dataList: []
    }
  },
  created () {
    // 在当前钩子请求数据
    weekRequeseData({
      params: {
        limit: 30,
        offset: 5
      }
    })
      .then(res => (this.dataList = res))
  },
  methods: {
  },
  components: {
    weekrecommend
  }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>
