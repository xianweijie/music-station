<!--  -->
<template>
  <div>
    <!-- 页面标题 -->
    <header class="header_title">
      <button
        @touchstart="goBack"
        v-show="!(pageName==='分类')">
        &lt;
      </button>
      <p>{{titleName[pageName] || '分类'}}</p>
    </header>
    <!-- 导航部分 -->
    <nav class="classify_nav" v-show="(pageName==='分类')">
      <router-link to="/classify/artist" class="classify_nav_tabs">
        <p class="classify_nav_tabs_text">歌手</p>
        <span class="tabs_artist bg"></span>
      </router-link>
      <router-link to="/classify/album" class="classify_nav_tabs">
        <p class="classify_nav_tabs_text">专辑</p>
        <span class="tabs_album bg"></span>
      </router-link>
      <router-link to="/classify/radioStation" class="classify_nav_tabs">
        <p class="classify_nav_tabs_text">电台</p>
        <span class="tabs_radioStation bg"></span>
      </router-link>
      <router-link to="/classify/songList" class="classify_nav_tabs">
        <p class="classify_nav_tabs_text">歌单</p>
        <span class="tabs_songList bg"></span>
      </router-link>
    </nav>
    <router-view
      :paramsPageName="paramsPageName"
      v-show="!(pageName==='分类')">
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'classify',
  props: {
    // 路由动态传参值解耦
    pageName: {
      type: String,
      default: '分类'
    }
  },
  data () {
    return {
      // 标题的动态内容
      titleName: {
        artist: '歌手',
        songList: '歌单',
        album: '专辑',
        radioStation: '电台'
      },
      // 动态路由COPY到组件内，并传入子组件
      paramsPageName: ''
    }
  },
  // 进入组件路由前判断
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (vm.pageName !== '分类') {
        // 假如首次进入页面为classify下的子页面
        vm.paramsPageName = vm.pageName
      }
    })
  },
  watch: {
    // 侦听路由变化，把动态路由参数copy到组件内
    $route (to, from) {
      if (this.pageName !== '分类') {
        this.paramsPageName = this.pageName
      }
    }
  },
  methods: {
    // 标题左上角返回按钮
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
.header_title{
  background:linear-gradient(#ff5858,#f09819);
  text-align: center;
  color: white;
  height: 4vh;
  padding: 1vh 0;
  font-size: 7vw;
  margin-bottom: 1vh;
  position:sticky;
  top: 0;
  left: 0;
  z-index: 5000;
}
.header_title button {
  position: absolute;
  height: 6vh;
  width: 10vw;
  left: 0;
  top: 0;
  background: none;
  color: white;
  outline: none;
  border: none;
}
.classify_nav{
  width: 100vw;
}
.classify_nav_tabs{
  height: 20vh;
  width: 100%;
  display: block;
  margin-bottom: 1vh;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.classify_nav_tabs_text{
  color: white;
  font-size: 6vw;
  padding: 2vh 4vw;
  background-color: rgba(255,255,255,0.4);
  border-radius: 1vw;
  text-shadow: 2px 2px 2px rgba(0,0,0,0.8)
}
.tabs_artist{
  background: url('~@/assets/img/classify/artist.jpg');
}
.tabs_album{
  background: url('~@/assets/img/classify/album.jpg');
}
.tabs_radioStation{
  background: url('~@/assets/img/classify/radioStation.jpg');
}
.tabs_songList{
  background: url('~@/assets/img/classify/songList.jpg');
}
.bg{
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  filter: blur(2px);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  z-index: -500;
}
</style>
