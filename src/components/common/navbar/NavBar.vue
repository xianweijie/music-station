<template>
  <div class="nav_bar">
    <div class="nav_bar_left">
      <slot name="barLeft"></slot>
    </div>
    <div class="nav_bar_middle">
      <slot name="barMiddle">购物街</slot>
    </div>
    <div class="nav_bar_right">
      <slot name="barRight"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.nav_bar{
  height: 6vh;
  width: 100vw;
  display:flex;
  text-align:center;
  box-shadow:0 1px 1px rgba(100,100,100,0.2);
  position: fixed;
  top: 0;
  line-height: 7vh;
  z-index: 9;
}
.nav_bar_left{
  flex:1
}
.nav_bar_middle{
  flex:4；
}
.nav_bar_right{
  flex:1
}
.navbar_color{
    background-image: linear-gradient(45deg , #ff5f6d, #ffc371);
    color:white;
}
</style>
