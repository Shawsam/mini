import API from './service/api/index'
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  getUserInfo(cb){
    let userInfo = this.globalData.userInfo
    if(userInfo) {
      cb(userInfo)
    }else{
      API.login({
        openid:'1'
      }).then(res => {
        this.globalData.userInfo = res
        cb(res)
      })
    }
  },
  fetchUserInfo(){
    API.login({
      openid:'1'
    }).then(res => {
      this.globalData.userInfo = res
    })
  },
  globalData: {
    userInfo: null
  }
})
