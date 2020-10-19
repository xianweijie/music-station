import axios from 'axios'
// classify所有子组件公共配置
// ------------------------------------------
// 歌手接口公共配置
export function artistsBaseRequest (config) {
  const instance = axios.create({
    baseURL: '/app',
    timeout: '50000'
  })
  // 数据响应拦截，成功时返回数据中data对象
  instance.interceptors.response.use(function (response) {
    return response.data.list.artists
  }, function (err) {
    return Promise.reject(err)
  })
  return instance(config)
}
// 专辑接口公共配置
export function cdBaseRequest (config) {
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
// 电台接口公共配置
export function radioStationBaseRequest (config) {
  const instance = axios.create({
    baseURL: '/app',
    timeout: '50000'
  })
  // 数据响应拦截，成功时返回数据中data对象
  instance.interceptors.response.use(function (response) {
    return response.data.programs
  }, function (err) {
    return Promise.reject(err)
  })
  return instance(config)
}
// 歌单接口公共配置
export function songListBaseRequest (config) {
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
