<template>
  <transition>
    <div class="loadMore" ref="loadMore" v-show="showloadMore">loading more ...</div>
  </transition>
</template>

<script>
export default {
  name: 'loadMore',
  props: {
    showloadMore: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped>
 .loadMore{
   position: absolute;
   box-shadow: 2px 2px 2px rgba(100,100,100,0.5);
   bottom: 8vh;
   width: 100vw;
   text-align: center;
   background: white;
   opacity: 0.9;
   font-size: 6vw;
   color: greenyellow;
 }
</style>
