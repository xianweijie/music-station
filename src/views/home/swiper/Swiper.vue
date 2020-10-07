<template>
  <div class="swiper_box" :prevent="true" :stopPropagation="true">
    <!-- 获取到请求数据时遍历数据 -->
    <template v-if="hasData">
      <!-- miti-ui -->
      <ui-swipe :auto="4000">
        <template v-for="(item, index) in list">
          <ui-swipe-item :key="item.name" v-if="index<5">
            <img :src="item.picUrl" :alt="item.name" class="swiper_item_img">
          </ui-swipe-item>
        </template>
      </ui-swipe>
    </template>
    <!-- 没获取到数据时，展示loading -->
    <template v-else>
    <ui-spinner :type="3" color="red" class="spinner" :size="50"></ui-spinner>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    dataList: {
      type: Array,
      required: true
    },
    hasData: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      list: ''
    }
  },
  watch: {
    // 侦听父组件异步请求通过props传入的数据，并引用到组件内data
    dataList: {
      handler (val) {
        this.list = val
      },
      immediate: true
    }
  },
  components: {
  }
}
</script>

<style scoped>
.spinner{
  height: 100%;
  width: 100vw;
  justify-content: center;
  align-items: center;
  display: flex;
}
.swiper_item_img{
  width: 100vw;
  height: 50vh;
}
</style>
