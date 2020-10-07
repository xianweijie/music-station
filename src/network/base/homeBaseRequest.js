import axios from 'axios'

// HOME所有子组件公共配置---
// ------------------------------------------
// weekRecommend（每周推荐）组件接口公共配置
export function weekRequese (config) {
  const instance = axios.create({
    baseURL: '/app',
    timeout: '50000'
  })
  // 数据响应拦截，成功时返回数据中data对象
  instance.interceptors.response.use(function (response) {
    return response.data.list.artists
  }, function (err) {
    // 失败时返回一个失败的promise状态
    return Promise.reject(err)
  })
  return instance(config)
}
// recommend（最新专辑）&& newCd-tabs(底部选项卡“新碟上架”)组件接口公共配置
export function newCdRequest (config) {
  const instance = axios.create({
    baseURL: '/app',
    timeout: '50000'
  })
  // 数据响应拦截，成功时返回数据中data对象
  instance.interceptors.response.use(function (response) {
    return response.data.albums
  }, function (err) {
    return Promise.reject(err)
  })
  return instance(config)
}
// newSong-tabs(底部选项卡“精选歌单”)组件组件接口公共配置
export function songRequest (config) {
  const instance = axios.create({
    baseURL: '/app',
    timeout: '50000'
  })
  // 数据响应拦截，成功时返回数据中data对象
  instance.interceptors.response.use(function (response) {
    return response.data.playlists
  }, function (err) {
    return Promise.reject(err)
  })
  return instance(config)
}
// hotArtists-tabs(底部选项卡“热门歌手”)组件组件接口公共配置
export function hotArtistsRequest (config) {
  const instance = axios.create({
    baseURL: '/app',
    timeout: '50000'
  })
  // 数据响应拦截，成功时返回数据中data对象
  instance.interceptors.response.use(function (response) {
    return response.data.artists
  }, function (err) {
    return Promise.reject(err)
  })
  return instance(config)
}
// 顶部swiper组件轮播图组件接口公共配置
export function swiperRequest (config) {
  const instance = axios.create({
    baseURL: '/app',
    timeout: '50000'
  })
  // 数据响应拦截，成功时返回数据中data对象
  instance.interceptors.response.use(function (response) {
    return response.data.result
  }, function (err) {
    return Promise.reject(err)
  })
  return instance(config)
}
