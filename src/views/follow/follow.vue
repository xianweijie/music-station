<!--  -->
<template>
  <div>
    <header class="header_title">我的关注</header>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'follow',
  mounted () {
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState('followInfo', {
      followData: 'followData'
    })
  }
}
</script>
<style scoped>
.header_title{
  background: orange;
  text-align: center;
  color: white;
  height: 5vh;
  padding: 1vh 0;
  font-size: 7vw;
}
</style>
