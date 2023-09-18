import http from '../http';

export default {
  createOrder(params) {
    return http.get('/fit/submitOrder', params);
  }
};
