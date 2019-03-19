import Config from './config'

function get(url, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: Config.host + url,
      data: data,
      success(res) {
        if (res.data.code === 0) {
          resolve(res.data)
        } else {
          reject(res.data)
        }
      }
    })
  })
}

export { get }
