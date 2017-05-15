import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
  /**
   * 用户信息
   */
	userInfo: null,
  /**
   * 登录状态
   */
  login: true
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
})
