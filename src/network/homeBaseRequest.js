import axios from 'axios'

export function homeBaseRequest (config) {
  const instance = axios.create({
    baseURL: '/product',
    timeout: '50000'
  })
  // 数据响应拦截，成功时返回数据中data对象
  instance.interceptors.response.use(function (response) {
    return response.data.data.list
  }, function (err) {
    // 失败时返回一个失败的promise状态
    return Promise.reject(err)
  })
  return instance(config)
}
