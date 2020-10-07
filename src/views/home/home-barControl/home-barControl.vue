<template>
  <div>
    <!-- 选项卡navBars部分 -->
    <!-- barList为毕传参数，childEmit监听子组件抛出值 -->
    <barControlCommon :barList="barList" @childEmit="getEmit">
      <!-- 左侧选项卡插槽内容 -->
      <template v-slot:leftItem>
        <div>热门歌手</div>
      </template>
      <!-- 中间选项卡插槽内容 -->
      <template v-slot:middleItem>
        <div>新碟上架</div>
      </template>
      <!-- 右侧选项卡插槽内容 -->
      <template v-slot:rightItem>
        <div>精选歌单</div>
      </template>
    </barControlCommon>
    <!-- 选卡卡tabBars动态组件部分 -->
    <transition :name="moveDirection">
      <keep-alive>
        <!-- tabs内容显示部分，以动态组件形式展示 -->
        <div :is='isComponent' :scroll="scroll"></div>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
// 导入的公共组件
import barControlCommon from 'components/common/barControl/BarControl-common.vue'
// 导入的子组件
import newCdTabs from './home-barControl-tabs/newCd-tabs.vue'
import hotArtistsTabs from './home-barControl-tabs/hotArtists-tabs.vue'
import newSongTabs from './home-barControl-tabs/newSong-tabs.vue'
export default {
  name: 'home-barControl',
  props: ['scroll'],
  data () {
    return {
      // 传入公共组件barControlCommon数据，用于tabBar标题静态参数
      barList: {
        default: '热门歌手',
        title: {
          leftItem: '热门歌手',
          middleItem: '新碟上架',
          rightItem: '精选歌单'
        }
      },
      // 控制过渡动画左、右插入方向的变量
      moveDirection: 'moveRight',
      // 控制动态组件显示内容的变量
      isComponent: 'hotArtistsTabs'
    }
  },
  methods: {
    // 监听子组件barControlCommon触发当前组件getEmit函数，并接受当前被选中的选项卡value
    getEmit (val) {
      const title = this.barList.title
      let paramsName = 'hotArtistsData'
      // 调用moveAction事件，把value作为参数传进
      this.moveAction(val)
      // 由子组件barControlCommon $emit的value来判断当前tabBars选项卡该展示哪个组件
      if (val === title.leftItem) {
        this.isComponent = 'hotArtistsTabs'
        paramsName = 'hotArtistsData'
      }
      if (val === title.middleItem) {
        this.isComponent = 'newCdTabs'
        paramsName = 'newCdData'
      }
      if (val === title.rightItem) {
        this.isComponent = 'newSongTabs'
        paramsName = 'songData'
      }
      // 重新计算Bscroll高度
      setTimeout(() => {
        this.scroll.refresh()
      }, 300)
      // 传到父组件当前所选择的TAB，下拉时请求对应数据项
      // 值可能为'songData'/'hotArtistsData'/'newCdData'
      this.$emit('isTab', paramsName)
    },
    // 根据上一次被选中的选项卡名触发下一次进入选项卡时应该采取怎样的过渡动画
    moveAction (val) {
      if (val === '热门歌手') {
        this.moveDirection = 'moveRight'
      }
      if (val === '精选歌单') {
        this.moveDirection = 'moveLeft'
      }
      if (val === '新碟上架') {
        if (this.isComponent === 'hotArtistsTabs') {
          this.moveDirection = 'moveLeft'
        } else {
          this.moveDirection = 'moveRight'
        }
      }
    }
  },
  components: {
    barControlCommon,
    newCdTabs,
    hotArtistsTabs,
    newSongTabs
  }
}
</script>

<style>
  /*动态组件过度动画*/
  .moveLeft-enter{
    transform: translateX(100vw)
  }
  .moveLeft-leave-to{
    transform: translateX(-100vw);
    position: absolute;
  }
  .moveLeft-enter-active,.moveLeft-leave-active{
    transition: 1s all;
  }
  .moveRight-enter{
    transform: translateX(-100vw)
  }
  .moveRight-leave-to{
    transform: translateX(100vw);
    position: absolute;
  }
  .moveRight-enter-active,.moveRight-leave-active{
    transition: 1s all;
  }
  /*tabs样式*/
  .tabs_box{
    display: flex;
    width: 100vw;
    flex-wrap: wrap;
    padding: 1vw;
  }
  .tabs_item{
    flex: 1;
    width: 46vw;
    text-align: center;
    margin-bottom: 2vh;
    justify-content: space-around;
  }
  .tabs_item_box{
    position: relative;
    text-align:center;
  }
  .tabs_item_img{
    vertical-align: bottom;
    width: 45vw;
  }
  .tabs_item_text{
    position: absolute;
    font-size: 4vw;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(255,255,255,0.8);
    padding: .7vh;
    color: #333333;
  }
</style>
