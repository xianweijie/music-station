<template>
    <div id="tab-bar">
      <tabbarItem>
        <template v-slot:barItems="{itemInfo}">
          <div class="tab-bar-item" v-for="item in itemInfo" :key="item.listName">
            <router-link :to="item.path">
              <div>
                <template v-if="item.active">
                <img :src="item.imgSrcActive" alt="item.listName" class="tab-bar-item-img">
                <p class="text-active">{{item.info}}</p>
                </template>
                <template v-else>
                  <img :src="item.imgSrc" alt="item.listName" class="tab-bar-item-img">
                  <p>{{item.info}}</p>
                </template>
              </div>
            </router-link>
          </div>
        </template>
      </tabbarItem>
    </div>
</template>

<script>
import tabbarItem from '../content/tabbar-item.vue'
export default {
  name: 'tabBar',
  data () {
    return {
    }
  },
  components: {
    tabbarItem
  }
}
</script>
<style scoped>
#tab-bar{
  display:flex;
  position:fixed;
  bottom:0;
  left:0;
  height:49px;
  text-align:center;
  width:100%;
  background-color:#e0e0e0;
  box-shadow:0 -1px 10px rgba(100,100,100,0.3);
}
.tab-bar-item{
  border:none;
  flex:1;
}
</style>
