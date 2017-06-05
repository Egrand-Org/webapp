import axios from 'axios'
import { Toast } from 'mint-ui'

/**
 * 获取我的会议信息
 */
let getPage4Meeting = (status, pageNo) => {
  return new Promise((resolve, reject) => {
    axios.get("/api/v1/meeting/todo/" + status, {
      params: {
        pageNo: pageNo
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
    axios.get("/api/v1/meeting/" + id).then(function(result){
      resolve(result);
    }).catch(function(error){
      Toast(error);
    })
  })
}

export { getPage4Meeting, openMeeting }
