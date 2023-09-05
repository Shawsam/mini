// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    panelShow:false
  },
  onLoad() {

  },
  filterShow(e){
    this.setData({
      panelShow:e.currentTarget.dataset.bol
    })
  }
})
