import { weekRequese, newCdRequest, songRequest, hotArtistsRequest, swiperRequest } from 'network/base/homeBaseRequest.js'
// HOME页面---
// week-recommedn（每周推荐）请求接口
export function weekRequeseData (params) {
  // 合并由请求时定义的请求数据
  const config = Object.assign({}, params, {
    url: '/toplist/artist'
  })
  return weekRequese(config)
}
// recommend（最新专辑）&& newCd-tabs(tabs新碟上架)请求接口
export function newCdData (params) {
  const config = Object.assign({}, params, {
    url: '/top/album'
  })
  return newCdRequest(config)
}
// newSong（精选歌单）请求接口
export function songData (params) {
  const config = Object.assign({}, params, {
    url: '/top/playlist'
  })
  return songRequest(config)
}
// hotArtistsData（tabs热门歌手)请求接口
export function hotArtistsData (params) {
  const config = Object.assign({}, params, {
    url: '/top/artists'
  })
  return hotArtistsRequest(config)
}
// swiper组件请求接口
export function swiperData (params) {
  const config = Object.assign({}, params, {
    url: '/personalized/newsong'
  })
  return swiperRequest(config)
}
