const app = getApp()

Page({
  data: {
  },
  onLoad() {
    wx.showModal({
      title: '阶段完成确认',
      content: '当前阶段施工完成了吗？',
      showCancel: true,
      cancelText: '取消',
      cancelColor: '#000000',
      confirmText: '确定',
      confirmColor: '#3CC51F',
      success: (result) => {
        if (result.confirm) {
          
        }
      }
    });
      
  },
})
