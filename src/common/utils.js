// 截取接口数据片段只保留id/name/url/checked
export function dataPlastic (arr) {
  return arr.map((item) => {
    var newItem = {
      id: item.id,
      name: item.name,
      url: item.coverImgUrl || item.blurPicUrl || item.img1v1Url,
      checked: false
    }
    return newItem
  })
}
