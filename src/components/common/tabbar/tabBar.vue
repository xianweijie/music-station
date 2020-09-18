<template>
  <div>
    <ui-tabbar flex="true">
      <template v-for="item in list">
        <router-link :to="item.path" :key="item.name" class="link">
          <ui-tabbar-item :key="item.name">
              <img slot="icon" :src="item.active? item.imgSrcActive: item.imgSrc" alt="item.name">
              <span :class="item.active?'a':'b'">{{item.info}}</span>
          </ui-tabbar-item>
        </router-link>
      </template>
    </ui-tabbar>
  </div>
</template>

<script>
export default {
  name: 'tabBar',
  props: {
    dataList: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      list: this.dataList,
      active: true
    }
  },
  watch: {
    $route (to, from) {
      this.list.map(function (item) {
        if (to.path === item.path) {
          item.active = true
        } else {
          item.active = false
        }
      })
    }
  },
  components: {
  }
}
</script>
<style scoped>
.link{
  display: inline-block;
  flex: 1;
}
.a{
  color: #e6399b
}
.b{
  color:#696969;
}
</style>
