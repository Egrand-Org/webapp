import axios from 'axios'

/**
 * 获取我的议题信息
 */

var getPage4My = () => {
  return new Promise((resolve, reject) => {
    axios.get("http://127.0.0.1:7001/api/v1/issues", {
      withCredentials: true,
      params: {
        viewType: 'my'
      }
    }).then(function(response){
      resolve({result: true, data: response.data})
    }).catch(function(error){
      resolve({result: false, data: error})
    });
  })
}

var getPageByStatus = (status) => {
  return new Promise((resolve, reject) => {
    axios.get("http://127.0.0.1:7001/api/v1/issues/todo/" + status, {
      withCredentials: true
    }).then(function(response){
      resolve({result: true, data: response.data})
    }).catch(function(error){
      resolve({result: false, data: error})
    });
  })
}

export {getPage4My, getPageByStatus}
