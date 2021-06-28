//http://qtsc.dev-altamedia.com/api/create
import axios from 'axios';
import { Service } from 'axios-middleware';
export const github = axios.create({
    baseURL: 'https://raw.githubusercontent.com/madnh/hanhchinhvn/master/dist'
});

//http://qtsc.dev-altamedia.com/api/create
export const api = axios.create({
    baseURL: 'http://qtsc.dev-altamedia.com/api/'
});


const service = new Service(api);

service.register({
  onRequest(config) {
    console.log('onRequest',config);
    return config;
  },
  onSync(promise) {
    return promise;
  },
  onResponse(response) {
    console.log('onResponse',response);
    return response;
  },
  onResponseError(error){
    console.log('onResponseError',error);
      throw error;
  }
});