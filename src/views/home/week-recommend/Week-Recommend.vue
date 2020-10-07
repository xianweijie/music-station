<template>
  <div class="week_recommend_box">
    <div class="week_recommend_title">每周推荐</div>
      <!-- 请求返回数据时 -->
      <template v-if="hasData">
        <transition-group
          name="list"
          tag="div"
          id="week_recommend">
          <div v-for="(item) in newList" :key="item.name" class="week_recommend_item">
            <img :src="item.img1v1Url" alt="item.name" class="week_recommend_item_img">
            <p class="week_recommend_item_text">{{item.name}}</p>
          </div>
        </transition-group>
      </template>
      <!-- 请求未返回数据时，loading显示 -->
      <div v-else class="spinner">
        <ui-spinner :type="2" color="red"></ui-spinner>
      </div>
  </div>
</template>

<script>
export default {
  name: 'weekRecommend',
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      dataList: '',
      newList: '',
      hasData: false,
      oldOffset: 8,
      newOffset: 16,
      potency: 8
    }
  },
  beforeDestroy () {
    clearInterval(this.timer)
  },
  watch: {
    // 监听由父组件请求props传入的异步数据
    list: [
      // 接收到PROPS数据后立即执行回调COPY到组件变量dataList
      {
        handler (val) {
          this.dataList = val
          this.newList = this.dataList.slice(0, 8)
          this.hasData = true
        },
        immediate: true
      },
      // 继续执行第二个回调过滤数组
      'filterArr'
    ]
  },
  methods: {
    // 过滤异步请求的数据截取数组中头8个
    filterArr () {
      const _this = this
      this.timer = setInterval(() => {
        const newArr = _this.dataList.slice(_this.oldOffset, _this.newOffset)
        if (_this.newOffset < _this.dataList.length) {
          _this.oldOffset += 8
          _this.newOffset += 8
        } else {
          _this.oldOffset = 0
          _this.newOffset = 8
        }
        _this.newList = newArr
      }, 5000)
    }
  },
  components: {
  }
}
</script>
<style scoped>
  .week_recommend_box{
    background:none;
  }
  #week_recommend{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    text-align: center;
    height: 28vh;
  }
  .week_recommend_item{
    margin-bottom: 1vh;
    width: 23vw;
  }
  .week_recommend_item_img{
    width: 18vw;
    border-radius: 50%;
  }
  .week_recommend_title{
    margin-bottom: 2vh;
    font-size: 4vw;
    color: rgba(0 191 255);
    opacity: 0.5;
    font-weight: bolder;
    text-align: center;
  }
  .week_recommend_item_text{
    font-size: 2vw;
    color: #363636;
  }
  .spinner{
    display: flex;
    justify-content: center;
  }
  .list-enter{
    opacity: 0;
  }
  .list-enter-to{
    opacity: 1;
  }
  .list-enter-active{
    transition: 2s all;
  }
  .list-move{
    position: relative;
  }
</style>
