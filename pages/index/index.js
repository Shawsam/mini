const app = getApp()
import API from '../../service/api/common'
import API_PRO from '../../service/api/product'

Page({
  data: {
    activeTab:1,
    activeRoom:1,
    activeArea:1,
    panelShow:false,
    indicatorDots: true, // 是否显示指示点
    autoplay: true, // 是否自动切换
    interval: 3000, // 自动切换时间间隔，单位为ms
    duration: 500, // 滑动动画时长，单位为ms
    imageUrls: [
      '../../images/banner.jpg',
    ] // 图片链接数组
  },
  onLoad() {
    API.getNotice({limit:1}).then(res => {
      this.setData({
        content: res,
      })
    })

    API_PRO.productSearch().then(res => {
      this.setData({
        list: res,
      })
    })
  },
  filterShow(e){
    this.setData({
      panelShow:e.currentTarget.dataset.bol
    })
  },
  openSearch(){
    wx.navigateTo({
      url: '/pages/search/index',
    })
  },
  openDetail(){
    wx.navigateTo({
      url: '/pages/productDetail/index',
    })
  },
  switchTab(e){
    this.setData({
      activeTab:e.currentTarget.dataset.tab
    })
  },
  chooseRoom(e){
    this.setData({
      activeRoom:e.currentTarget.dataset.tab
    })
  },
  chooseArea(e){
    this.setData({
      activeArea:e.currentTarget.dataset.tab
    })
  },
})
