<template>
  <div>
    <router-view></router-view>
    <tabBar></tabBar>
  </div>
</template>

<script>
import tabBar from 'components/content/tabBar-content.vue'
export default {
  name: 'App',
  components: {
    tabBar
  }
}

</script>

<style lang="stylus">

</style>
