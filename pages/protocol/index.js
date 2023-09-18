const app = getApp()
import API from '../../service/api/user'

Page({
  data: {
    content:''
  },
  onLoad() {
    // 获取客户列表
    API.getAgreement().then(res => {
      this.setData({
        content: res,
      })
    })
  }
})
