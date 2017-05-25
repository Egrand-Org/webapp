import axios from 'axios'
import router from '../router/index'
import store from '../store/index'
import {CLEAR_EGRANDCONTEXT} from '../store/mutation-types'

axios.defaults.timeout = 5000
axios.defaults.baseURL = 'http://easy-mock.com/mock/59224b5b9aba4141cf29a034/szyd'
axios.defaults.withCredentials = false

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
