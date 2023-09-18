import http from '../http';

export default {
  productSearch(params) {
    return http.post('/fit/search', params);
  },
  productSelect(params) {
    return http.post('/fit/getServiceItems', params);
  },
  productDetail(params) {
    return http.post('/fit/getPro', params);
  },
  productRelate(params) {
    return http.post('/fit/getFitHotPros', params);
  },
};
