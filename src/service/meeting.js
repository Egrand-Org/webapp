import axios from 'axios'
import { Toast } from 'mint-ui'

/**
 * 获取我的会议信息
 */
let getPage4Meeting = (status) => {
  return new Promise((resolve, reject) => {
    axios.get("/api/v1/hy/todo/" + status, {
      params: {
        viewType: 'my'
      }
    }).then(function(result){
      resolve(result);
    }).catch(function(error){
      Toast(error);
    });
  })
}

/**
 * 展示会议详情
 * @param id
 * @returns {Promise}
 */
let openMeeting = (id) => {
  return new Promise((resolve, reject) => {
    axios.get("/api/v1/hy/" + id).then(function(result){
      resolve(result);
    }).catch(function(error){
      Toast(error);
    })
  })
}

export { getPage4Meeting, openMeeting }
