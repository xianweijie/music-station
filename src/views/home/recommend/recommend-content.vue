<template>
  <recommend :dataList="list|arrFliter(offset)"></recommend>
</template>

<script>
// 引入子组件
import recommend from './Recommend.vue'
// 数据请求
import { newCdData } from 'network/home/homeRequestData.js'
export default {
  name: 'recommendContent',
  data () {
    return {
      list: '',
      // offset为页面展示数量
      offset: 4
    }
  },
  created () {
    // 当前钩子进行数组请求
    newCdData().then((res) => (this.list = res))
  },
  filters: {
    // 局部过滤器，过滤服务器请求传入子组件的显示条数
    arrFliter (arr, offset) {
      return arr.filter((item, index) => {
        if (index < offset) {
          return item
        }
      })
    }
  },
  components: {
    recommend
  }
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>
