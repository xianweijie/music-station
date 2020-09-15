<template>
  <router-view></router-view>
  <tabBar></tabBar>
</template>

<script>
import tabBar from 'components/common/tabbar/tab-bar.vue'
export default {
  name: 'App',
  components: {
    tabBar
  }
}

</script>

<style lang="stylus">

</style>
