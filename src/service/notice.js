/**
 *	公告
 */
import axios from 'axios'
import { Toast } from 'mint-ui';

/**
 * 获取公告列表
 */
var getPage4Notice = () => {
  return new Promise((resolve, reject) => {
    axios.get("/api/v1/notice/list", {
    }).then(function(result){
      resolve(result)
    }).catch(function(error){
      Toast(error)
    });
  })
}

//TODO
/**
 * 展示公告详情
 * @param id
 * @returns {Promise}
 */
let openNotice = (id) => {
  return new Promise((resolve, reject) => {
    axios.get("/api/v1/notice/info/" + id).then(function(result){
      resolve(result);
    }).catch(function(error){
      Toast(error);
    })
  })
}





export {getPage4Notice, openNotice}
