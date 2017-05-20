import axios from 'axios'

/**
 * 账号密码登录
 */

var login = (username, password) => {
  return new Promise((resolve, reject) => {
    axios.get("http://127.0.0.1:7001/login?loginName=" + username + "&loginPassword=" + password + "&isSavePwd=true", {
      withCredentials: true
    }).then(function(response){
      const {result, msg, egdContext} = response.data;
      if(!result)
        resolve({result, data: msg})
      else
        resolve({result, data: eval("(" + egdContext + ")")})
    }).catch(function(error){
      resolve({result: false, data: error})
    });
  })
}

/**
 * 退出登录
 */
var unLogin = () =>{

}

export {login, unLogin}
