<template>
  <div id="contentBar"
    :class="{
      background_hotArtists : active==='hotArtists',
      background_newCdList : active==='newCdList',
      background_songList : active==='songList'
    }">
    <template v-if="followData[active].length">
      <label
        v-for="item in followData[active]"
        :key="item.name"
        class="contentBar_item">
        <img :src="item.url" alt="item.name" ref="img">
        <p>{{item.name}}</p>
        <input
          type="checkbox"
          :disabled="!maskingShow"
          :value="item.name"
          v-model="notFollow"
          @change="eventTarget"
          ref="itemList">
      </label>
    </template>
    <template v-else>
      <router-link to="/home" class="toAddSomeThing">
        去关注点喜欢的吧
      </router-link>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'contentBar',
  props: {
    // 由父组件接受到sideBar所选中的data-name再传入
    contentBarName: {
      type: String,
      default: 'hotArtists'
    },
    maskingShow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      active: 'hotArtists',
      notFollow: [],
      inputStyle: {
        backgroundImage: 'url(' + require('@/assets/img/contentBar/true.svg') + ')',
        backgroundSize: '70% 70%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    }
  },
  // 组件触发更新钩子时调用bscroll重新计算高度
  updated () {
    this.$parent.refresh()
  },
  methods: {
    // 触发checkbox上chang事件时添加或删除class isChecked
    eventTarget (e) {
      if (e.target.checked) {
        // checkbox为checked=true时添加class isChecked
        e.target.classList.add('isChecked')
      } else {
        // checkbox为checked=false时删除class isChecked
        e.target.classList.remove('isChecked')
        e.target.style.backgroundColor = 'none'
      }
    },
    // 父组件follow在蒙版开启状态下点击取消关闭蒙版后，调用的子组件清空选中样式isChecked的方法
    clearChecked () {
      // 循环所有checkbox元素，删除class isChecked并将所有checked设置为false
      this.$refs.itemList.forEach(item => {
        item.classList.remove('isChecked')
        item.checked = false
      })
    }
  },
  watch: {
    // 当侦听到props的contentBarName变化时，则复制到组件内active
    contentBarName (val) {
      this.active = val
    },
    // 侦听checkbox所绑定的数组，并抛出到父组件
    notFollow (val) {
      this.$emit('getNotFollwoList', val)
    }
  },
  computed: {
    ...mapState('followInfo', {
      followData: 'followData'
    })
  },
  components: {
  }
}
</script>
<style scoped>
  #contentBar{
    display: flex;
    text-align: center;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-around;
    width: 100%;
  }
  .contentBar_item{
    margin-left: 1vw;
    margin-bottom: 2vh;
    width: 30vw;
    z-index: 700;
    position: relative;
  }
  .contentBar_item input[type=checkbox]{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border: none;
    background-color: rgba(0,0,0,0)
  }
  .isChecked{
    background: url('~@/assets/img/contentBar/true.svg');
    background-size: 70% 70%;
    background-position: center;
    background-repeat: no-repeat;
  }
  .contentBar_item img{
    width: 22vw;
    border-radius: 50%;
  }
  .contentBar_item p{
    font-size: 4vw;
    width: 22vw;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .background_hotArtists{
    color: #FF6666;
  }
  .background_newCdList{
    color: #6699CC;
  }
  .background_songList{
    color: #16e071;
  }
  .toAddSomeThing{
    display: block;
    padding: 2vw;
    font-size: 6vw;
    background: orange;
    color: white;
    border-radius: 1vw;
    box-shadow: 2px 2px 2px rgba(153,153,153,0.4);
    position: absolute;
    top: 30vh;
  }
</style>
