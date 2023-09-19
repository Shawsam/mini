import API from '../../service/api/index'
const app = getApp()

Page({
  data: {
    avatar:'',
    nickname: '',
    phone:''
  },
  onLoad() {
      let userInfo = app.globalData.userInfo
      this.setData({
        avatar:userInfo.head_pic,
        nickname:userInfo.nickname,
        phone:userInfo.phone
      })
  },
  submit(){
    let params = {
      nickName: this.data.nickname,
      headPic: this.data.avatar,
      phone: '15651878015',
    }
     API.updateUserInfo(params).then(res=>{
       wx.showToast({
        title: '修改成功',
        icon: 'success',
        image: '',
        duration: 1500,
        mask: true
       });
         
    })
  },
  nameInput(e){
    this.setData({
      nickname: e.detail.value
    })
  },
  avatarEdit(){
    let file = ''
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (result) => {
        file = result.tempFilePaths[0]         
        wx.uploadFile({
          url: 'http://fit.jmlson.com/fit/upload',
          filePath: file,
          name: 'avatar',
          success: (res) => {
            let avatar = JSON.parse(res.data).result
            this.setData({
              avatar
            })
          },
          fail: () => {

          }
        })
      },
      fail: () => {

      },
    })     
  }
})
