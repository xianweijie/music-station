<template>
  <div class="follow_box">
    <!-- 页面标题 -->
    <header class="header_title">
      <p>我的关注</p>
      <button
        v-show="showButton">
        <span
          v-if="maskingShow"
          @touchstart="hideMasking">
          取消
        </span>
        <span
          v-else
          @touchstart="showMasking">
          管理
        </span>
      </button>
    </header>
    <!-- 页面选项卡内容&&可滚动区域 -->
    <bscroll
      class="bscroll_contentBar"
      ref="scroll"
      :scrollY="true"
      :probeType="1"
      :click="true"
      :cssStyle="cssStyle">
      <!-- 滚动内容 -->
      <contentbar
        :contentBarName="sideBarName"
        :maskingShow="maskingShow"
        @getNotFollwoList="getChildEmit"
        ref="centerBar">
      </contentbar>
    </bscroll>
    <!-- 页面选项卡 -->
    <sidebar @getBarName="handlerByEmit">
    </sidebar>
    <!-- 蒙版 -->
    <div v-show="maskingShow" class="masking">
      <ui-button
        class="masking_btn"
        type="danger"
        size="large"
        @touchstart.native="REMOVEFOLLOWDATA"
        >
        取消关注
      </ui-button>
    </div>
  </div>
</template>

<script>
import bscroll from 'components/common/Bscroll/Bscroll.vue'
import contentbar from './contentBar/contentBar.vue'
import sidebar from './sideBar/sideBar.vue'
import { mapState } from 'vuex'
export default {
  name: 'follow',
  data () {
    return {
      // 当前被选中tabs的data-name，数据由子组件sidebar抛出
      sideBarName: 'hotArtists',
      // 传入bscroll组件的样式
      cssStyle: {
        height: '66vh'
      },
      // 决定蒙版是否显示
      maskingShow: false,
      notFollowList: []
    }
  },
  watch: {
    // 侦听路由变化
    $route (route) {
      const mp = route.matched.some(item => {
        return item.path === '/follow'
      })
      // 假如当前路由路径为当前页面路径，调用bscroll重新计算高度
      if (mp) {
        this.$refs.scroll.refresh()
      }
    }
  },
  methods: {
    // 对store数据进行操作
    // 载荷信息为当前被选中tabs的名称及当前被选中取消关注的信息
    // 01.删除对应store下的followData中数据
    // 02.把store下dataBase对应数据checked设置为false
    REMOVEFOLLOWDATA () {
      this.$store.dispatch('followInfo/REMOVEFOLLOWDATA', {
        listName: this.sideBarName,
        removeData: this.notFollowList
      }).then(res => {
        if (res) {
          // 返回值为true则隐藏蒙版及清空不关注数组
          this.maskingShow = false
          this.notFollowList = []
        }
      })
    },
    // 由子组件sidebar传递触发的事件，抛出参数为当前sideBar所选的tabs的name
    handlerByEmit (name) {
      this.sideBarName = name
      // 每次切换选中一个tabs则调用bscroll重新计算滚动高度
      this.$refs.scroll.refresh()
      // 调用bscroll的scrollTo方法，滚动位置为X=0,Y=0
      this.$refs.scroll.scrollTo(0, 0)
    },
    // 点击管理按钮后蒙版显示
    showMasking () {
      this.maskingShow = true
    },
    // 在蒙版展示时点击取消
    hideMasking () {
      // 隐藏模板
      this.maskingShow = false
      // 清空notFollowList数据
      this.notFollowList = []
      this.$refs.centerBar.clearChecked()
    },
    // 接收子组件contentBar抛出的取消关注数据数组
    getChildEmit (list) {
      this.notFollowList = list
    }
  },
  computed: {
    // 获取store中收藏数据
    ...mapState('followInfo', {
      followData: 'followData'
    }),
    // 计算当前所选中的tabs对应在store中是否有收藏，是则返回true,否则false
    // 该计算返回值控制头部按钮“管理”是否显示
    showButton () {
      return !!this.followData[this.sideBarName].length
    }
  },
  components: {
    contentbar,
    sidebar,
    bscroll
  }
}
</script>
<style scoped>
.follow_box{
  position: relative;
}
/* 头部样式 */
.header_title{
  background:linear-gradient(#ff5858,#f09819);
  text-align: center;
  color: white;
  height: 4vh;
  padding: 1vh 0;
  font-size: 7vw;
  margin-bottom: 1vh;
  position: relative;
  z-index: 200;
}
.header_title button{
  position: absolute;
  border: none;
  background: none;
  font-size: 4vw;
  height: 100%;
  color: white;
  padding: 0 4vw;
  right: 1vw;
  top: 0;
  outline: none;
}
/* 可滚动区域定位 */
.bscroll_contentBar{
  z-index: 200;
  position: relative;
}
/* 蒙版样式 */
.masking{
  height: 66vh;
  background: rgb(204, 204, 204 ,0.8);
  box-shadow: 0 0 3px rgba(8, 8, 8, 0.5) inset;
  position:absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
}
.masking_btn{
  width: 60vw;
  height: 10vh;
  position: absolute;
  bottom: 15vh;
  left: 20vw;
}
</style>
