// index.js
const app = getApp()

Page({
  data: {
  },
  onLoad() {
  },
  apply(){
    wx.showToast({
      title: '已提交申请',
      icon: 'success',
      image: '',
      duration: 1500,
      mask: true,
    });
      
  }
})
