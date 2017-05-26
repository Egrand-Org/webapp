import axios from 'axios'
import router from '../router/index'
import store from '../store/index'
import {CLEAR_EGRANDCONTEXT} from '../store/mutation-types'
import {getToken} from '../config/mUtils'

axios.defaults.timeout = 5000
axios.defaults.baseURL = 'http://10.1.10.16:7001'
axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

//axios.interceptors.request.use(config => {
//  const token = getToken("csrfToken");
//  if (token) {
//    config.headers["X-XSRF-TOKEN"] = token;
//  }
//  return config;
//},err => {
//  return Promise.reject(err);
//});

//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) =>{
  if(!res.data.success){
    return Promise.reject(res.data.msg)
  }
  return res.data.result
}, (error) => {
  if(error.response){
    switch (error.response.status) {
      case 401:
        store.commit(CLEAR_EGRANDCONTEXT);
        router.replace({
          path: 'Login',
          query: {redirect: router.currentRoute.fullPath}
        })
    }
  }
  return Promise.reject(error)
});

export default axios
