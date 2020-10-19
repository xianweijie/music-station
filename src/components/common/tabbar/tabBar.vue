<template>
  <ui-tabbar flex="true" class="tabbar">
    <template v-for="item in list">
      <router-link :to="{name: item.listName,path: item.path}" :key="item.name" class="link">
        <ui-tabbar-item :key="item.name" class="tabbar_item">
            <img class="icon_size" slot="icon" :src="item.active? item.imgSrcActive: item.imgSrc" alt="item.name">
            <span :class="item.active?'active_style':'normal_style'">{{item.info}}</span>
        </ui-tabbar-item>
      </router-link>
    </template>
  </ui-tabbar>
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
        if (to.fullPath.indexOf(item.path) !== -1) {
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
.tabbar{
  height: 8vh;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
}
.link{
  height: 100%;
  flex: 1;
}
.active_style,.normal_style{
  font-size: 4vw;
  font-weight: bold;
}
.icon_size{
  width: 100%;
  height: 100%;
}
.active_style{
  color: #e6399b
}
.normal_style{
  color:#696969
}
</style>
