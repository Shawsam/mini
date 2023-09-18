const app = getApp()
import API from '../../service/api/user'

Page({
  data: {
    panelShow:false,
    codeImg:'',
    customers:[],
    telphone:'1'
  },
  onLoad() {
    // 获取客户列表
    API.getCustomers().then(res => {
      this.setData({
        customers: res.list,
        telphone: res.telphone
      })
    })
  },
  onPanelShow(e){
    console.log(e)
     this.setData({
      panelShow: e.target.dataset.bol,
      codeImg:e.target.dataset.img
     })
  },
  onCopy(e){
    wx.setClipboardData({
      data: e.target.dataset.wx,
      success: function () {
        wx.showToast({title: '复制成功'})
      }
    })
  }
})
