// 引入数据请求接口
// import { newCdData, hotArtistsData, songData } from 'network/home/homeRequestData.js'
// 引入公共工具库
import { dataPlastic } from '@/common/utils.js'
export default {
  namespaced: true,
  state: () => {
    return {
      // 存储所有tabs响应的数据
      dataBase: {
        songList: [],
        newCdList: [],
        hotArtists: []
      },
      // 存储所有tabs已收藏的数据
      followData: {
        songList: [],
        newCdList: [],
        hotArtists: []
      },
      // 请求PARAMS参数
      requestParams: {
        songList: {
          params: {
            order: 'new',
            limit: 10,
            offset: 0
          }
        },
        newCdList: {
          params: {
            limit: 10,
            offset: 0
          }
        },
        hotArtists: {
          params: {
            limit: 10,
            offset: 0
          }
        }
      },
      // 根据dataBase是否有存有数据判断是否需要初始化数据的变量
      isInitialization: true
    }
  },
  getters: {
  },
  mutations: {
    // tabs中某个内容被关注提交数据操作
    addInFollowData (state, payload) {
      const { listName, item } = payload
      state.followData[listName].push(item)
    },
    // tabs中某个内容被取关提交数据操作
    removeInFollowData (state, payload) {
      const { listName, index } = payload
      state.followData[listName] = state.followData[listName].filter((item, arrIndex) => {
        if (arrIndex !== index) {
          return item
        }
      })
    },
    // 把已经裁剪后的数据数组对应合并到store中的dataBase上
    classificationRequest (state, payload) {
      const { list, type } = payload
      for (var itema in list) {
        for (var itemb in state.dataBase) {
          if (itema === itemb) {
            state.dataBase[itemb] = state.dataBase[itemb].concat(list[itema])
          }
        }
      }
      // 调整store中requestParams内对应的offset偏移量作为下次请求前的参数
      // // 值可能为'all'/'songData'/'hotArtistsData'/'newCdData'
      if (type === 'all') {
        state.requestParams.songList.params.offset += 10
        state.requestParams.newCdList.params.offset += 10
        state.requestParams.hotArtists.params.offset += 10
      }
      if (type === 'songData') {
        state.requestParams.songList.params.offset += 10
      }
      if (type === 'hotArtistsData') {
        state.requestParams.hotArtists.params.offset += 10
      }
      if (type === 'newCdData') {
        state.requestParams.newCdList.params.offset += 10
      }
    },
    /* 01.提交删除store中followDataa数据
        payload:
          {listName, removeData}
    */
    DELETFOLLOWDATA (state, payload) {
      const { listName, removeData } = payload
      var list = state.followData[listName]
      // 去除state.followData[listName]数组上的另外一个数组removeData的相同数据
      for (var i = 0; i < removeData.length; i++) {
        for (var j = 0; j < list.length; j++) {
          if (list[j].name === removeData[i]) {
            list.splice(j, 1)
            j--
          }
        }
      }
    },
    /* 02.提交改变database对应数组中对象的checked
        payload:
          {listName, removeData}
    */
    CHANGEDATABASECHECKED (state, payload) {
      const { listName, removeData } = payload
      let list = state.dataBase[listName] // eslint-disable-line no-unused-vars
      // 把dataBase数组中对应removeData的数组对象checked变为false
      list = list.filter(item => {
        for (var i = 0; i < removeData.length; i++) {
          if (item.name === removeData[i]) {
            item.checked = false
            return item
          }
        }
      })
    }
  },
  actions: {
    // home组件数据请求
    requestTabsData ({ dispatch }, payload) {
      // 分发到classificationRequest根据payload值按需请求
      // payload值可能为'all'/'songData'/'hotArtistsData'/'newCdData'
      dispatch('classificationRequest', payload)
    },
    classificationRequest ({ state, commit }, payload) {
      const requestParams = state.requestParams
      // 当payload值为“all”时，则作为初始化请求，引入所有请求接口请求数据
      if (payload === 'all') {
        const { songData, hotArtistsData, newCdData } = require('network/home/homeRequestData.js')
        Promise.all([songData(requestParams.songList),
          hotArtistsData(requestParams.hotArtists),
          newCdData(requestParams.newCdList)
        ]).then(arrRes => {
          // 请求成功后数据都会被工具库中dataPlastic函数处理截取部分
          const list = {
            songList: dataPlastic(arrRes[0]),
            newCdList: dataPlastic(arrRes[2]),
            hotArtists: dataPlastic(arrRes[1])
          }
          // 提交到mutations中进行对已有数据合并
          commit('classificationRequest', {
            list: list,
            type: payload
          })
        })
      }
      // 当payload === 'songData'，即tabs下拉请求数据时
      if (payload === 'songData') {
        const { songData } = require('network/home/homeRequestData.js')
        songData(requestParams.songList).then(res => {
          const list = {
            songList: dataPlastic(res)
          }
          commit('classificationRequest', {
            list: list,
            type: payload
          })
        })
      }
      // 当payload === 'hotArtistsData'，即tabs下拉请求数据时
      if (payload === 'hotArtistsData') {
        const { hotArtistsData } = require('network/home/homeRequestData.js')
        hotArtistsData(requestParams.hotArtists).then(res => {
          const list = {
            hotArtists: dataPlastic(res)
          }
          commit('classificationRequest', {
            list: list,
            type: payload
          })
        })
      }
      // 当payload === 'newCdData'，即tabs下拉请求数据时
      if (payload === 'newCdData') {
        const { newCdData } = require('network/home/homeRequestData.js')
        newCdData(requestParams.newCdList).then(res => {
          const list = {
            newCdList: dataPlastic(res)
          }
          commit('classificationRequest', {
            list: list,
            type: payload
          })
        })
      }
    },
    // followBtn(收藏按钮)添加收藏与取消收藏数据操作
    // payload分别对应为：
    // listName: followData中哪一个数组
    // item: 关注及取消时对应的数据对象
    // toAdd是否进行添加true或删除false操作
    changeFollowData ({ commit, dispatch }, payload) {
      const { listName, item, toAdd } = payload
      // 判断是需要添加还是删除followData里面对应listName数组内的对象
      if (toAdd) {
        // 为true(即需要添加到收藏数据中)，分发到filterFollowItem处理
        return dispatch('filterFollowItem', payload)
          .then(res => {
            // 假如当前收藏数据中没找到该对象，则直接提交
            if (res === -1) {
              commit('addInFollowData', {
                listName: listName,
                item: item
              })
              return Promise.resolve('关注成功')
            }
          })
      } else {
        // 即toAdd为false,需要进行收藏里面数据对象删除操作
        // 还是先进行过滤一下
        return dispatch('filterFollowItem', payload)
          .then(res => {
            // 此时数组过滤返回值为-1则不需要什么操作
            if (res === -1) {
            } else {
              // 不为-1则找到该数据对象的并且res为对象在数组中索引值
              // 触发mutations中removeInFollowData函数进行处理
              commit('removeInFollowData', {
                listName: listName,
                index: res
              })
              return Promise.resolve('取消关注')
            }
          })
      }
    },
    // 过滤当前followData中是否已经存在payload中item对象
    filterFollowItem ({ state }, payload) {
      const { listName, item } = payload
      const followDataList = state.followData[listName]
      // 返回一个promise.resolve对象
      // 该对象状态值为数组的索引或-1
      const hasData = followDataList.findIndex((arrItem) => {
        return arrItem.name === item.name
      })
      return Promise.resolve(hasData)
    },
    // follow页面actions
    /*
    payload参数
      listName（string）：当前需要操作的store-followData对应的数组名
      removeData(array)：需要从store-followData删除的项
    返回值（Promise对象）:
      1.传入removeData为空时,返回false
      2.传入removeData非空,返回ftrue
    */
    REMOVEFOLLOWDATA ({ commit }, payload) {
      const { removeData } = payload
      // follow分发载荷数组为空则返回false
      if (removeData.length === 0) {
        return Promise.resolve(false)
      } else {
        // 非空返回一个true
        return toCommit()
      }
      /*
      非空时执行异步函数
        01.提交删除store中followDataa数据
        02.提交改变database对应数组中对象的checked
      */
      async function toCommit () {
        try {
          await commit('DELETFOLLOWDATA', payload)
        } catch (err) {
          return Promise.reject(new Error('提交失败'))
        }
        try {
          await commit('CHANGEDATABASECHECKED', payload)
        } catch (err) {
          return Promise.reject(new Error('提交失败'))
        }
        return await Promise.resolve(true)
      }
    }
  }
}
