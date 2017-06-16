/**
 *	定义制度
 */

import axios from 'axios'
import { Toast } from 'mint-ui';

/**
 * 获取制度建设列表
 */
var getPage4Institution = () => {
  return new Promise((resolve, reject) => {
    axios.get("/api/v1/institution/list", {
      
    }).then(function(result){
      resolve(result)
    }).catch(function(error){
      Toast(error)
    });
  })
}




/**
 * 展示制度建设详情
 * @param id
 * @returns {Promise}
 */
let openInstitution = (id) => {
  return new Promise((resolve, reject) => {
    axios.get("/api/v1/institution/info/" + id).then(function(result){
      resolve(result);
    }).catch(function(error){
      Toast(error);
    })
  })
}


export {getPage4Institution, openInstitution}
