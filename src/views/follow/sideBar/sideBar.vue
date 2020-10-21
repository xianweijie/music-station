<template>
  <div id="sidebar">
    <!-- tabs歌手模板 -->
    <div class="sidebar_item"
      data-name="hotArtists"
      @touchstart="handler($event)"
      :class="{active : checked.hotArtists}">
      <img :src="iconSrc.artists" alt="artists" class="sidebar_item_img">
      <div>
        <p>歌手</p>
        <p class="sidebar_item_text">已关注：{{followData.hotArtists.length}}</p>
      </div>
    </div>
    <!-- tabsCD专辑模板 -->
    <div class="sidebar_item"
      data-name="newCdList"
      @touchstart="handler($event)"
      :class="{active : checked.newCdList}">
      <img :src="iconSrc.cd" alt="cd" class="sidebar_item_img">
      <div>
        <p>CD专辑</p>
        <p class="sidebar_item_text">已关注：{{followData.newCdList.length}}</p>
      </div>
    </div>
    <!-- tabsCD歌单模板 -->
    <div class="sidebar_item"
      data-name="songList"
      @touchstart="handler($event)"
      :class="{active : checked.songList}">
      <img :src="iconSrc.songList" alt="songList" class="sidebar_item_img">
      <div>
        <p>歌单</p>
        <p class="sidebar_item_text">已关注：{{followData.songList.length}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'sidebar',
  mounted () {
  },
  data () {
    return {
      active: 'follow-item-b',
      // 引入静态tabs的svg图标
      iconSrc: {
        artists: require('@/assets/img/sidebar/artists.svg'),
        cd: require('@/assets/img/sidebar/cd.svg'),
        songList: require('@/assets/img/sidebar/songList.svg')
      },
      // 当前所选中的tabs，true为选中，否则false
      checked: {
        hotArtists: true,
        newCdList: false,
        songList: false
      }
    }
  },
  watch: {
    followData: {
      handler (val) {
        console.log(val)
      },
      immedita: true
    }
  },
  methods: {
    // 由touchstart事件触发，向父组件follwo传递tabs的data-name
    handler (e) {
      // name为当前touchstart所绑定的DOM元素上的data-name
      const name = e.currentTarget.dataset.name
      // 遍历checked，匹配到data-name则设为true,否则false
      for (const item in this.checked) {
        name === item ? this.checked[item] = true : this.checked[item] = false
      }
      this.$emit('getBarName', name)
    }
  },
  computed: {
    // 获取store上已收藏的内容
    ...mapState('followInfo', {
      followData: 'followData'
    })
  }
}
</script>
<style scoped>
  #sidebar{
    justify-content: space-around;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 18vh;
    font-size: 4vw;
  }
  .sidebar_item{
    border-radius: 1vw;
    width: 30vw;
    text-align: center;
    padding: 1vh 0;
    box-shadow: 2px 2px 2px rgba(100,100,100,0.3);
  }
  /* 分别对tabs的背景做定义 */
  .sidebar_item:nth-child(1){
    background: linear-gradient(-180deg,#feada6,#f5efef);
    color: #FF6666;
  }
  .sidebar_item:nth-child(2){
    background: linear-gradient(#accbee,#e7f0fd);
    color: #6699CC;
  }
  .sidebar_item:nth-child(3){
    background: linear-gradient(#76fab1,#dbffeb);
    color: #16e071;
  }
  .sidebar_item_img{
    width: 40%;
  }
  .sidebar_item_text{
    margin-top: 1vh;
    font-size: 3vw;
  }
  .active{
    opacity: 0.5;
    box-shadow: none;
    transition: all 1s;
  }
</style>
