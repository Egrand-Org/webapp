import axios from 'axios'
import { Toast } from 'mint-ui';

/**
 * 获取我的议题列表
 */
let getPage4My = () => {
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

let getPageByStatus = (status) => {
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

/**
 * 用户页-用户议题数目列表
 */
let getReport4User = () => {
  return new Promise((resolve, reject) => {
    axios.get("api/v1/user/report").then(function(result){
      resolve(result);
    }).catch(function(error){
      Toast(error);
    })
  })
}

export {getPage4My, getPageByStatus, openYt, openYtLog, getReport4User}
