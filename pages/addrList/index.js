import API from '../../service/api/index'
const app = getApp()

Page({
  data: {
    list:[]
  },
  addrEdit(e){
    let info = e.currentTarget.dataset.info
    wx.navigateTo({
      url: '/pages/addrEdit/index?info='+JSON.stringify(info),
    })
  },
  addrDefault(e){
    let info = e.currentTarget.dataset.info
    info.isDefault = 1
    info.phone = app.globalData.userInfo.phone
    API.updateAddr(info).then(res=>{
      this.onShow();
      wx.showToast({
        title: '操作成功',
        icon:'success',
        duration:1500
      })
    })
  },
  addrDel(e){
    wx.showModal({
      title: '地址管理',
      content: '是否删除该地址？',
      showCancel: true,
      cancelText: '取消',
      cancelColor: '#000000',
      confirmText: '确定',
      confirmColor: '#3CC51F',
      success: (result) => {
        if (result.confirm) {
            API.deleteAddr({
            addrId:e.currentTarget.dataset.info.id,
            phone:app.globalData.userInfo.phone
          }).then(res=>{
            this.onShow();
            wx.showToast({
              title: '删除成功',
              icon:'success',
              duration:1500
            })
          })
        }
      }
    });
  },
  onShow() {
      app.getUserInfo((userInfo)=>{
        API.getAddr({
          phone:userInfo.phone
        }).then(res => { 
          this.setData({
            list:res
          })
        })
      })
  },
})
