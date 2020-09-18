<template>
  <div class="swiper_box" :prevent="true" :stopPropagation="true">
    <template v-if="hasData">
      <ui-swipe :auto="4000">
        <template v-for="item in list">
          <ui-swipe-item :key="item.name">
            <router-link :to="item.routerLink">
              <img :src="item.pair" :alt="item.name">
            </router-link>
          </ui-swipe-item>
        </template>
      </ui-swipe>
    </template>
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
      default: false
    }
  },
  data () {
    return {
      list: this.dataList
    }
  },
  components: {
  }
}
</script>

<style scoped>
.spinner{
  height: 160px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
