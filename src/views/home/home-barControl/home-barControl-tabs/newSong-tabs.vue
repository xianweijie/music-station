<template>
  <div class="tabs_box">
    <div v-for="item in songData" :key="item.name" class="tabs_item">
      <div class="tabs_item_box">
        <img v-lazy="item.url" :alt="item.name" class="tabs_item_img">
        <p class="tabs_item_text">&lceil; {{item.name}} &rfloor;</p>
      </div>
      <!-- 关注与取关按钮 -->
      <!-- item:为遍历出来的数据源   name为当前所在组件在store上key-->
      <followBtn :item="item" name="songList"></followBtn>
    </div>
  </div>
</template>

<script>
// 引入子组件followBtn
import followBtn from './followBtn.vue'
// 引入vuex辅助函数
import { mapState } from 'vuex'
export default {
  name: 'newSong-tabs',
  props: ['scroll'],
  data () {
    return {
    }
  },
  computed: {
    ...mapState('followInfo', {
      songData (state) {
        return state.dataBase.songList
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
</style>
