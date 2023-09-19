import API from '../../service/api/index'
const app = getApp()

Page({
  data: {
    panelShow:false,
    info:null,
    activeTab:1,
    list:[]
  },
  onLoad() {
    API.productDetail({
      proId:6
    }).then(res => {
      this.setData({
        info:res
      })
    })
    API.productRelate({
      userId:1
    }).then(res=>{
      this.setData({
        list: res,
      })
    })
  },
  openContact(){
    wx.navigateTo({
     url: '/pages/contact/index',
    })
 },
  filterShow(e){
    this.setData({
      panelShow:e.currentTarget.dataset.bol
    })
  },
  buyConfirm(){
    let userId = 1,
        proId = 1,
        total = 60,
        itemFees = "20,30",
        itemNames = "水电",
        lvFee = "10",
        lvName = "金牌服务",
        addrId = 1,
        remark = ""
    let params = {
      userId,
      proId,
      total,
      itemFees,
      itemNames,
      lvFee,
      lvName,
      addrId,
      remark
    }
    API.createOrder(params).then(res=>{
      console.log(res)
    })
  },
  switchTab(e){
    this.setData({
      activeTab:e.currentTarget.dataset.tab
    })
  },
  openDetail(){
    wx.wx.redirectTo({
      url: '/pages/productDetail/index'
    });
  }
})
