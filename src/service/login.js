import axios from 'axios'
import { Toast } from 'mint-ui'
import qs from 'qs'

/**
 * 账号密码登录
 */

var login = (username, password, isSavePwd) => {
  return new Promise((resolve, reject) => {
    axios.post("/api/v1/user/login", qs.stringify({
      loginName: username,
      loginPassword: password,
      isSavePwd: isSavePwd
    })).then(function(result){
      resolve(result)
    }).catch(function(error){
      Toast(error);
    });
  })
}

/**
 * 退出登录
 */
var unLogin = () =>{

}

export {login, unLogin}
