import axios from 'axios'

axios.defaults.timeout = 5000
axios.defaults.baseURL = 'http://10.1.10.16:7001'

//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) =>{
  console.log(res);
  if(!res.data.success){
    return Promise.reject(res.data.msg);
  }
  return res.data.result;
}, (error) => {
  return Promise.reject(error);
});

export default axios
