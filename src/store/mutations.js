import {
  SET_EGRANDCONTEXT
} from './mutation-types.js'

export default {
  [SET_EGRANDCONTEXT](state, context){
    state.egrandContext = context;
    state.login = true;
  }
}
