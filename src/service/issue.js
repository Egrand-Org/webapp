import axios from 'axios'
import { Toast } from 'mint-ui';

/**
 * 获取我的议题信息
 */

var getPage4My = () => {
  return new Promise((resolve, reject) => {
    axios.get("/api/v1/issues", {
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
    axios.get("/api/v1/issues/todo/" + status).then(function(result){
      console.log(result);
      resolve(result)
    }).catch(function(error){
      Toast(error)
    });
  })
}

export {getPage4My, getPageByStatus}
