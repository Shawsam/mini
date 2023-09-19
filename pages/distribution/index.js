// index.js
const app = getApp()

Page({
  data: {
  },
  onLoad() {
  },
  openPage(e){
    let page = e.currentTarget.dataset.page;
    wx.navigateTo({
      url: `/pages/${page}/index`,
    });
  },
  filterShow(e){
    this.setData({
      panelShow:e.currentTarget.dataset.bol
    })
  }
})
