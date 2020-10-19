<template>
  <div id="home">
    <!-- navbar部分内容 -->
    <navbar class="navbar_color">
      <template #barMiddle>Music</template>
    </navbar>
    <!-- 可滚动区域 -->
    <scroll ref="scroll"
      :scrollY="true"
      :probeType="3"
      :needPosition="true"
      :pullUpLoad="true"
      :click="true"
      :enabled="enabled"
      :height="86"
      :cssStyle="cssStyle"
      @onScroll="getScrollPosition"
      @pullUp="pullingUpHandler">
      <!-- 轮播图部分内容 -->
      <swiper></swiper>
      <!-- 推荐部分内容 -->
      <recommend></recommend>
      <!-- 本周推荐部分内容 -->
      <weekRecommend></weekRecommend>
      <!-- 切换控件 -->
      <homeBarControl
        :scroll='scroll'
        @isTab="getTabName"
      ></homeBarControl>
    </scroll>
    <!-- 回到顶部按钮 -->
    <backtop v-show="backTopShow"
    @click.native="backTopHandler"/>
    <!-- loadMore部分-->
    <loadmore :showloadMore="showloadMore"/>
  </div>
</template>

<script>
// common组件
import navbar from 'components/common/navbar/NavBar.vue'
import scroll from 'components/common/Bscroll/Bscroll.vue'
import backtop from 'components/common/backTop/backTop.vue'
import loadmore from 'components/common/loadMore/loadMore.vue'
// child组件
import swiper from './swiper/swiper-content.vue'
import recommend from './recommend/recommend-content.vue'
import weekRecommend from './week-recommend/week-recommend-content.vue'
// import homeBarControl from './home-barControl/home-barControl.vue'
// 导入vuex辅助函数
import { mapState } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      scroll: '',
      backTopShow: false,
      requestName: 'hotArtistsData',
      showloadMore: false,
      enabled: true,
      cssStyle: {
        height: '86vh',
        marginTop: '6vh'
      }
    }
  },
  created () {
    // 根据store上变量isInitialization（默认true）决定是否需要请求数据
    if (this.isInitialization) {
      // 为true及store中无可用数据时，进行分发请求
      // 传入payload='all'则为分别请求tabs三个接口数据
      // 值可能为'all'/'songData'/'hotArtistsData'/'newCdData'
      this.$store.dispatch('followInfo/requestTabsData', 'all')
    }
  },
  mounted () {
    // 把bscroll实例保存到组件内
    this.scroll = this.$refs.scroll
  },
  befroeDestroy () {
    // 销毁组件前把Bscroll销毁
    this.scroll.destroy()
  },
  methods: {
    backTopHandler () {
      this.scroll.scrollTo(0, 0)
    },
    // 由Bscroll下拉事件触发对应TAB数据请求
    async pullingUpHandler () {
      await this.$store.dispatch('followInfo/requestTabsData', this.requestName)
      this.showloadMore = true
      this.enabled = false
      // 为下一次下拉提供两秒的缓冲
      setTimeout(() => {
        this.showloadMore = false
        this.enabled = true
        this.scroll.finishPullUp()
      }, 3000)
    },
    // 获取bscroll滚动位置
    // 当前滚动高度大于800时，backTop按钮显示
    getScrollPosition (position) {
      position.y <= -500 ? this.backTopShow = true : this.backTopShow = false
    },
    // 获取到tabs当前所选中的选项卡名称
    getTabName (val) {
      this.requestName = val
    },
    // 注入子组件方法：调用bscroll.refresh方法重新计算内容高度
    refresh () {
      this.scroll.refresh()
    }
  },
  computed: {
    // 获取store上数据
    // isInitialization决定是否需要初始化
    // dataBase保存了当前已请求到的所有tabs数据
    ...mapState('followInfo', {
      isInitialization: 'isInitialization',
      dataBase: 'dataBase'
    })
  },
  components: {
    navbar,
    swiper,
    recommend,
    weekRecommend,
    homeBarControl: () => (import('./home-barControl/home-barControl.vue')),
    scroll,
    backtop,
    loadmore
  }
}
</script>
<style scoped>
  #home{
    background: #ededee;
  }
</style>
