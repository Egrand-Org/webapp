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
    }).then(function(result){
      resolve(result)
    }).catch(function(error){
      Toast(error)
    });
  })
}

var getPageByStatus = (status) => {
  return new Promise((resolve, reject) => {
    axios.get("/api/v1/issues/todo/" + status).then(function(result){
      resolve(result)
    }).catch(function(error){
      Toast(error)
    });
  })
}

/**
 * 展示议题详情
 * @param id
 * @returns {Promise}
 */
let openYt = (id) => {
  return new Promise((resolve, reject) => {
    axios.get("/api/v1/issues/" + id).then(function(result){
      resolve(result);
    }).catch(function(error){
      Toast(error);
    })
  })
}

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
 * 展示执行详情
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

let getReport4User = () => {
  return new Promise((resolve, reject) => {
    axios.get("api/v1/user/report").then(function(result){
      resolve(result);
    }).catch(function(error){
      Toast(error);
    })
  })
}

export {getPage4My, getPageByStatus, openYt, getPageByStatusExe, openYtLog, getReport4User}
