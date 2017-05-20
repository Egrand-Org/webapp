require('es6-promise').polyfill()
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
  /**
   * 上下文
   */
  egrandContext: null,
  /**
   * 登录状态
   */
  login: false
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
})
