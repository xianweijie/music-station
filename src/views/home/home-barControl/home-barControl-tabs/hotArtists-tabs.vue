<template>
  <div class="tabs_box">
    <div v-for="(item) in hotArtistsData" :key="item.name" class="tabs_item">
      <div class="tabs_item_box">
        <img src="~@/assets/img/home/loading.gif" :alt="item.name" class="tabs_item_img" ref="prics" @load="onLoad($event, item.url)">
        <p class="tabs_item_text">&lceil; {{item.name}} &rfloor;</p>
      </div>
      <!-- 关注与取关按钮 -->
      <!-- item:为遍历出来的数据源   name为当前所在组件在store上key-->
      <followBtn :item="item" name="hotArtists"></followBtn>
    </div>
    <followBtn></followBtn>
  </div>
</template>

<script>
// 引入子组件followBtn
import followBtn from './followBtn.vue'
// 引入辅助函数
import { mapState } from 'vuex'
export default {
  props: ['scroll'],
  name: 'hotArtists-tabs',
  data () {
    return {
    }
  },
  methods: {
    onLoad (e, url) {
      e.target.src = url
    }
  },
  computed: {
    ...mapState('followInfo', {
      hotArtistsData (state) {
        return state.dataBase.hotArtists
      }
    })
  },
  // 在真实DOM挂载后及组件数据更新时都需要重新计算Bscroll高度
  mounted () {
    this.scroll.refresh()
  },
  updated () {
    this.scroll.refresh()
  },
  components: {
    followBtn
  }
}
</script>

<style scoped>
/* @import url(); 引入css类 */
</style>
