const app = getApp();
var qqmapsdk, QQMapWX = require('../../utils/qqmap-wx-jssdk.min');
import API from '../../service/api/index'

Page({
  data: {
    addr:'',
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
    qqmapsdk = new QQMapWX({
        key: 'FZ5BZ-NODR4-SRCUG-DP2R7-SS5B7-AYBHN'
    });   
    
    API.getBanners().then(res=>{
      this.setData({
        imageUrls: res,
      })
    })

    API.getNotice({limit:1}).then(res => {
      this.setData({
        notice: res[0],
      })
    })

    API.productSearch().then(res => {
      this.setData({
        list: res,
      })
    })
  },
  onShow(){
    // wx.getLocation({
    //   type: 'wgs84',
    //   altitude: false,
    //   success: (result) => {
    //     console.log(result)
    //   },
    //   fail: () => {},
    //   complete: () => {}
    // });
    qqmapsdk.reverseGeocoder({
        // location: {
        //   latitude: 39.984060,
        //   longitude: 116.307520
        // },
        success:(res)=> {//成功后的回调
            this.setData({
              addr:res.result.address,
              address_component:res.result.address_component,
            });
        }
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
