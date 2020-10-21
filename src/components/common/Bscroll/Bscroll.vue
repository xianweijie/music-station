<template>
  <div class="wrapper" ref="wrapper" :style="cssStyle">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScorll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'
export default {
  name: 'Bscroll',
  props: {
    scrollX: {
      type: Boolean,
      default: false
    },
    scrollY: {
      type: Boolean,
      default: false
    },
    click: {
      type: Boolean,
      default: false
    },
    probeType: {
      type: Number,
      default: 0
    },
    needPosition: {
      type: Boolean,
      default: false
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    },
    // ****
    enabled: {
      type: Boolean,
      default: true
    },
    cssStyle: {
      type: Object
    }
  },
  data () {
    return {
      bscroll: ''
    }
  },
  mounted () {
    // 使用插件
    BScorll.use(Pullup)
    // 创建Bscroll实例
    const Bscroll = new BScorll(this.$refs.wrapper, {
      scrollX: this.scrollX,
      scrollY: this.scrollY,
      click: this.click,
      probeType: this.probeType,
      pullUpLoad: true,
      bounce: true
    })
    // 把实例保持到组件数据
    this.bscroll = Bscroll
    // 根据props判断是否获取滚动位置
    if (this.needPosition) {
      this.onScroll()
    }
    // 根据props判断是否开启上拉加载更多提示
    if (this.pullUpLoad) {
      this.pullUp()
    }
  },
  watch: {
    // 侦听父组件enabled值变化，动态开启或关闭滚动。
    enabled (val) {
      this.bscroll.enabled = val
    }
  },
  methods: {
    // 滚动到某个位置
    scrollTo (x, y) {
      this.bscroll.scrollTo(x, y, 1000)
    },
    // 上拉加载更多方法
    pullUp () {
      this.bscroll.on('pullingUp', () => {
        this.$emit('pullUp')
      })
    },
    finishPullUp () {
      this.bscroll.finishPullUp()
    },
    // bscroll获取滚动位置的方法
    onScroll () {
      this.bscroll.on('scroll', (position) => {
        this.$emit('onScroll', position)
      })
    },
    // bscroll重新计算内容高度的方法
    refresh () {
      const _this = this
      setTimeout(() => {
        _this.bscroll.refresh()
      }, 600)
    },
    // 销毁Bscroll方法
    destory () {
      this.bscroll.destroy()
    }
  }
}
</script>

<style scoped>
.wrapper{
  overflow: hidden;
}
</style>
