import {SET_EGRANDCONTEXT, INIT_EGRANDCONTEXT, CLEAR_EGRANDCONTEXT} from './mutation-types.js'
import {setStore,getStore, removeStore} from '../config/mUtils'

export default {
  [SET_EGRANDCONTEXT](state, context){
    state.egrandContext = context;
    state.login = true;
    //存入localStorage
    setStore('egrandContext', state.egrandContext);
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
