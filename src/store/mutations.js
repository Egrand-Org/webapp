import {
	GET_USERINFO
} from './mutation-types.js'

import {
	setStore,
} from '../config/mUtils'

export default {
	//获取用户信息存入vuex
	[GET_USERINFO](state, info) {
		if (state.userInfo && (state.userInfo.username !== info.username)) {
			return;
		};
		if (!state.login) {
			return
		}
		if (!info.message) {
			state.userInfo = {...info};
			let validity = 30;
			let now = new Date();
			now.setTime(now.getTime() + validity * 24 * 60 * 60 * 1000);
			document.cookie = "USERID=" + info.user_id + ";expires=" + now.toGMTString();
			document.cookie = "SID=CeRxBZalHSiKuGI49DL2DhXMrOakCzQNcJFg" + ";expires=" + now.toGMTString();
		} else {
			state.userInfo = null;
		}
	}
}
