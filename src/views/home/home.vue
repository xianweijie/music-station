<template>
  <div>
    <!-- navbar部分内容 -->
    <navbar class="navbar_color">
    <template #barLeft>a</template>
    <template #barMiddle>购物街</template>
    <template #barRight>c</template>
    </navbar>
    <!-- 轮播图部分内容 -->
    <swiper></swiper>
  </div>
</template>

<script>
import navbar from 'components/common/navbar/NavBar.vue'
import swiper from 'components/content/swiper-content.vue'
export default {
  name: 'home',
  data () {
    return {
    }
  },
  components: {
    navbar,
    swiper
  }
}
</script>
<style scoped>
.navbar_color{
  background:#ea3a8d;
  color:white;
}
</style>
