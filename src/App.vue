<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tabBar></tabBar>
  </div>
</template>

<script>
import tabBar from 'components/common/tabbar/tabBar-content.vue'
export default {
  name: 'App',
  components: {
    tabBar
  }
}

</script>

<style lang="stylus">

</style>
