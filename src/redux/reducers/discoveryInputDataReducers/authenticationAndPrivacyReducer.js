import * as actionTypes from '../../actions/types/type'


export default function count (state=null, action){
  switch(action.type){
    case actionTypes.AUTH_PRIV:
    return action.data;
    
    default:
    return state;
  }
}