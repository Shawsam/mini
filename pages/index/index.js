// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    indicatorDots: true, // 是否显示指示点
    autoplay: true, // 是否自动切换
    interval: 3000, // 自动切换时间间隔，单位为ms
    duration: 500, // 滑动动画时长，单位为ms
    imageUrls: [
      '../../images/banner.jpg',
    ] // 图片链接数组
  },
  onLoad() {

  }
})
