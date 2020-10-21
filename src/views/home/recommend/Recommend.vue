<template>
  <div class="recommend_box">
    <p class="recommend_title">最新专辑</p>
    <div id="recommend">
      <div v-for="item in list" :key="item.name" class="recommend_item">
        <a :href="item.path">
          <img v-lazy="item.picUrl" :alt="item.name" class="recommend_item_img">
          <p class="recommend_item_text">{{item.name}}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: {
    dataList: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      list: ''
    }
  },
  watch: {
    // 侦听由父组件请求的props数据
    dataList: [
      {
        handler (val) {
          this.list = val
        },
        immediate: true
      }
    ]
  }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
.recommend_box{
  padding: 1vh;
  border-bottom: 1vh solid #DCDCDC;
  height: 18vh;
}
#recommend{
  display: flex;
  text-align: center;
  height: 10vh;
}
.recommend_title{
  font-size: 4vw;
  color: rgba(0 191 255);
  opacity: 0.5;
  margin-bottom: 2vh;
  font-weight: bolder;
}
.recommend_item{
  flex: 1;
  height: 12vh;
}
.recommend_item_img{
  width: 18vw;
  border-radius: 3% 3%;
  box-shadow: 3px 3px 3px rgba(100,100,100,0.5);
}
.recommend_item_text{
  font-size: 2vw;
  color: #363636;
  width: 18vw;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
</style>
