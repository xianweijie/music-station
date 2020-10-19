import { artistsBaseRequest, cdBaseRequest, radioStationBaseRequest, songListBaseRequest } from 'network/base/classifyBaseRequest.js'
// 歌手数据请求接口
export function requestArtistsData (params) {
  const config = Object.assign({}, params, {
    url: '/toplist/artist'
  })
  return artistsBaseRequest(config)
}
// 专辑数据请求接口
export function requesCdData (params) {
  const config = Object.assign({}, params, {
    url: '/top/album'
  })
  return cdBaseRequest(config)
}
// 电台数据请求接口
export function requestRadioStationData (params) {
  const config = Object.assign({}, params, {
    url: '/program/recommend'
  })
  return radioStationBaseRequest(config)
}
// 歌单数据请求接口
export function requestSongListData (params) {
  const config = Object.assign({}, params, {
    url: '/top/playlist'
  })
  return songListBaseRequest(config)
}
