<template>
  <!-- 判断左侧选项卡是否为默认选中是的话添加被选中样式 -->
  <div class="barControl_box">
    <template v-if="title.leftItem===defalut">
      <div class="leftItem item_active"
        @touchstart="itemChecked($event)"
        :class="title.leftItem===checked?class_Name:''"
      >
      <slot name="leftItem"></slot>
    </div>
    </template>
    <template v-else>
      <div class="leftItem"
        @touchstart="itemChecked($event)"
        :class="title.leftItem===checked?class_Name:''"
      >
      <slot name="leftItem"></slot>
    </div>
    </template>
    <!-- 中间选项卡 -->
    <div class="middleItem"
    @touchstart="itemChecked($event)"
    :class="title.middleItem===checked?class_Name:''">
      <slot name="middleItem"></slot>
    </div>
    <!-- 右侧选项卡 -->
    <div class="rightItem"
    @touchstart="itemChecked($event)"
    :class="title.rightItem===checked?class_Name:''">
      <slot name="rightItem"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BarControl-common',
  props: {
    barList: {
      type: Object
    }
  },
  data () {
    return {
      title: this.barList.title,
      defalut: this.barList.default,
      checked: '',
      class_Name: 'item_active'
    }
  },
  methods: {
    itemChecked (e) {
      // 由事件改变checked值，并把默认选中default值设为空
      const checkNow = e.target.innerHTML
      this.checked = checkNow
      this.defalut = null
      // 像父组件传递当前被选中选项卡的信息
      this.$emit('childEmit', checkNow)
    }
  }
}
</script>

<style scoped>
  .barControl_box{
    height: 6vh;
    display: flex;
    background: white;
    font-size: 5vw;
    text-align: center;
    justify-content: space-around;
  }
  .leftItem,.middleItem,.rightItem{
    width: 25vw;
    color:#999999;
    line-height: 6vh;
    font-size: 5vw;
  }
  .item_active{
    color: red;
    border-bottom: 0.2vh solid red;
  }
</style>
