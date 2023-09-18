import CONFIG from './config';
/**
 * url api post接口地址
 * params 接口参数
 */

function post(url, params) {
  const { sessionKeyId } = wx.getStorageSync('userInfo') || {sessionKey:''};
  params = { sessionKeyId, ...params }
  console.log(params)
  wx.showLoading({
    title: '加载中',
    mask: true,
  });
  return new Promise((resolve, reject) => {
    const { token } = wx.getStorageSync('userInfo') || { token: '' };
    wx.request({
      url: CONFIG.baseUrl + url,
      data: params,
      method: 'POST',
      header: {
        'content-type': 'application/json',
        Authorization: token,
        mob_ver:CONFIG.mob_ver,
        source:0
      },
      success: (res) => {
        wx.hideLoading();
        if (res.data.recode!=='0000') { // 错误请求处理
          wx.showToast({
            title: res.data.msg || '网络繁忙，请稍后重试',
            icon: 'none',
            duration: 2000,
          });
          return;
        }
        resolve(res.data.result);
      },
      fail: (res) => {
        wx.hideLoading();
        wx.showToast({
          title: '网络繁忙，请稍后重试',
          icon: 'none',
          duration: 2000,
        });
        reject(res.data);
      },
      complete: (res) => {
        reject(res.data);
      },
    });
  });
}

/**
 * url api get接口地址
 * params 接口参数
 */
function get(url, params) {
  wx.showLoading({
    title: '加载中',
    mask: true,
  });
  return new Promise((resolve, reject) => {
    const { token } = wx.getStorageSync('userInfo') || { token: '' };
    wx.request({
      url: CONFIG.baseUrl + url,
      data: params,
      method: 'GET',
      header: {
        'content-type': 'application/json',
        Authorization: token,
        mob_ver:CONFIG.mob_ver,
        source:0
      },
      success: (res) => {
        wx.hideLoading();
        if (res.data.recode!=='0000') { // 错误请求处理
          wx.showToast({
            title: res.data.msg || '网络繁忙，请稍后重试',
            icon: 'none',
            duration: 2000,
          });
          return;
        }
        resolve(res.data.result);
      },
      fail: (res) => {
        wx.showToast({
          title: '网络繁忙，请稍后重试',
          icon: 'none',
          duration: 2000,
        });
        reject(res.data);
      },
      complete: (res) => {
        reject(res.data);
      },
    });
  });
}

export default {
  get,
  post,
};
