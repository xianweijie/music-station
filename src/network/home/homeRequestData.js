import { homeBaseRequest } from 'network/homeBaseRequest.js'

export function swiperRequestData () {
  return homeBaseRequest({
    url: '/list.do',
    params: {
      pageNum: 7,
      pageSize: 5,
      orderBy: 'default',
      categoryId: 100012
    }
  })
}
