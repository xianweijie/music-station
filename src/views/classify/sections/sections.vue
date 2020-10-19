<!--  -->
<template>
  <div>
    <ui-cell
      v-for="item in dataList"
      :title="item.name"
      :key="item.name"
      to="#">
    </ui-cell>
  </div>
</template>

<script>
import { requestArtistsData, requesCdData, requestRadioStationData, requestSongListData } from 'network/classify/classifyRequestData.js'
export default {
  name: 'sections',
  props: {
    paramsPageName: {
      type: String
    }
  },
  data () {
    return {
      // key为动态路由值，value为对应请求接口的API
      listName: {
        artist: requestArtistsData,
        album: requesCdData,
        radioStation: requestRadioStationData,
        songList: requestSongListData
      },
      dataList: ''
    }
  },
  mounted () {
    // 组件真实DOM创建后调用一次数据接口
    this.listName[this.paramsPageName]().then(res => {
      this.dataList = res
    })
  },
  watch: {
    // 当父组件所传入的动态路由值发生变化时则调用接口请数据
    paramsPageName: {
      handler (val) {
        this.listName[val]().then(res => {
          this.dataList = res
        })
      },
      immedita: true
    }
  }
}
</script>
<style scoped>
  .selectBtn{
    width: 100vw;
    height: 30vh;
    border: 1px solid red;
  }
  .item_img{
    width: 10vw;
  }
</style>
