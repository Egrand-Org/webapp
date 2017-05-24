import axios from 'axios'
import { Toast } from 'mint-ui';

/**
 * 账号密码登录
 */

var login = (username, password) => {
  return new Promise((resolve, reject) => {
    axios.get("/api/v1/user/login?loginName=" + username + "&loginPassword=" + password + "&isSavePwd=true").then(function(result){
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
