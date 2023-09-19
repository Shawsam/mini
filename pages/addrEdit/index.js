
import API from '../../service/api/index'
const app = getApp()

Page({
  data: {
    info:{},
    isEdit:false
  },
  onLoad(options) {
    let info = JSON.parse(options.info)
    info && this.setData({ info, isEdit: true })
  },
  chooseLocation(){
    wx.chooseLocation({
      success: (result) => {
        let info = this.data.info
        info.address = result.address
        info.name = result.name
        this.setData({info})
      },
      fail: () => {},
      complete: () => {}
    });
  },
  nameInput(e){
    let info = this.data.info
    info.sname = e.detail.value
    this.setData({ info })
  },
  streetInput(e){
    let info = this.data.info
    info.street = e.detail.value
    this.setData({ info })
  },
  phoneInput(e){
    let info = this.data.info
    info.telphone = e.detail.value
    this.setData({ info })
  },
  submit(){
     let params = this.data.info
     params.isDefault = 1
     params.phone = app.globalData.userInfo.phone
     params.addrId = this.data.info.id
    if(this.data.isEdit){
        params.stype = 1
    }else{
        params.stype = 0
    }
    API.updateAddr(params).then(()=>{
      wx.showToast({
        title: '操作成功',
        icon: 'success',
        image: '',
        duration: 1500,
        mask: true,
        complete: () => {
          wx.navigateBack({
            delta: 1
          });
        }
      });
        
    })
  }
})
