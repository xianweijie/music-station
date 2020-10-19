<template>
  <div>
    <label for="followBtn" class="followBtn_box" :class="{isFollow:item.checked}">
      <input type="checkbox"
       :value="item.name"
        name="followBtn"
        class="followBtn_btn"
        v-model="item.checked"
        @change="changeFollowData(item, item.checked)">
      <template v-if="!item.checked">
        <span>&hearts;关注</span>
      </template>
      <template v-else>
        <span>&hearts;已关注</span>
      </template>
    </label>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  name: 'followBtn',
  inheritAttrs: false,
  props: {
    item: {
      type: Object,
      default: function () {
        return {}
      }
    },
    name: {
      type: String
    }
  },
  data () {
    return {
    }
  },
  methods: {
    // 调用store中分发函数进行数据处理，并传入
    // listName需要操作的followData（收藏数据的对应数组）名
    // item当前被关注或取关的对象
    // toAdd即当前被关注或取关的对象上绑定的checked属性值,true为添加到收藏数据，false为从收藏数据中删除
    // 此action根据所提交的信息是否已经被关注将返回‘添加成功’及‘取消关注’promise对象
    changeFollowData (item, itemChecked) {
      this.$store.dispatch('followInfo/changeFollowData', {
        listName: this.name,
        item: item,
        toAdd: itemChecked
      }).then(res => {
        // 将返回的字符串信息作为mint-ui提示内容
        Toast({
          message: res,
          position: 'bottom',
          duration: 1000
        })
      })
    }
  }
}
</script>

<style scoped>
  .followBtn_box{
    font-size: 4vw;
    position: relative;
    margin-top: 1vh;
    z-index: 2;
    width: 50%;
    border-radius: 4%;
    border: 1px solid #999999;
    display: inline-block;
    border-radius: 5% 5%;
    color: #999999;
  }
  .followBtn_btn{
    position: absolute;
    top: 0;
    left: 0;
    background: none;
    width: 100%;
    height: 100%;
    border: none;
  }
  .isFollow{
    color: #339966;
    border: 0.2vh solid #339966;
  }
</style>
