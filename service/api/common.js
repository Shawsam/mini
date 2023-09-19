import http from '../http';

export default {
  getBanners(params) {
    return http.get('/common/getAdvs', params);
  },
  getArea(params) {
    return http.get('/common/area', params);
  },
  getNotice(params) {
    return http.get('/common/getFitNotices', params);
  },
  imgUpload(params) {
    return http.post('/fit/upload', params);
  },
  getServiceItems(params) {
    return http.get('/fit/getServiceItems', params);
  }
};
