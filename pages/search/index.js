// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    keyword:"",
    listData:[1]
  },

  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  backIndex(){
      wx.navigateBack();
  },
  searchInput(val){
      this.setData  ({        
        keyword: val.detail.value
      })
  }
})
