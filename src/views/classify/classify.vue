<!--  -->
<template>
  <div>
    <!-- 页面标题 -->
    <header class="header_title">
      <p>分类</p>
    </header>
    <router-link to="/classify/album">GOOGOGO</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'classify',
  data () {
    return {
    }
  }
}
</script>
<style scoped>
.header_title{
  background:linear-gradient(#ff5858,#f09819);
  text-align: center;
  color: white;
  height: 4vh;
  padding: 1vh 0;
  font-size: 7vw;
  margin-bottom: 1vh;
}
</style>
