import {SET_EGRANDCONTEXT, INIT_EGRANDCONTEXT, CLEAR_EGRANDCONTEXT} from './mutation-types.js'
import {setStore,getStore, removeStore} from '../config/mUtils'
import router from '../router/index'

export default {
  [SET_EGRANDCONTEXT](state, context){
    state.egrandContext = context;
    state.login = true;
    //存入localStorage
    setStore('egrandContext', state.egrandContext);
    router.replace({
      path: 'Home'
    })
  },
  [INIT_EGRANDCONTEXT](state, context){
    let egrandContext = getStore('egrandContext');
    if (egrandContext) {
      state.egrandContext = JSON.parse(egrandContext);
    }
  },
  [CLEAR_EGRANDCONTEXT](state){
    state.egrandContext = null;
    state.login = false;
    removeStore('egrandContext');
  }
}
