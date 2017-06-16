import axios from 'axios'
import { Toast } from 'mint-ui';

/**
 * 决策执行清单
 * @param status {zxz: 执行中, yjc: 已决策}
 * @returns {Promise}
 */
let getPageByStatusExe = (status) => {
  return new Promise((resolve, reject) => {
    axios.get("/api/v1/issues/exe/todo/" + status).then(function(result){
      resolve(result);
    }).catch(function(error){
      Toast(error);
    });
  })
}

/**
 * 展示决策执行清单详情
 * @param id
 * @returns {Promise}
 */
let openYtLog = (id) => {
  return new Promise((resolve, reject) => {
    axios.get("/api/v1/issues/exe/" + id).then(function(result){
      resolve(result);
    }).catch(function(error){
      Toast(error);
    })
  })
}

export {getPageByStatusExe, openYtLog}
