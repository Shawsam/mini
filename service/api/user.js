import http from '../http';

export default {
  getCustomers(params) {
    return http.post('/fit/customers', params);
  },
  getAgreement(params) {
    return http.post('/fit/agreements', params);
  },
  login(params){
    return http.post('/fit/login', params);
  },
  updateUserInfo(params){
    return http.post('/fit/updateUser', params);
  },
  getAddr(params){
    return http.post('/fit/addressList', params);
  },
  updateAddr(params){
    return http.post('/fit/updateAddr', params);
  },
  deleteAddr(params){
    return http.post('/fit/deleteAddr', params);
  }
};
