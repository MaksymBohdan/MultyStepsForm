import * as actionTypes from '../../actions/types/type'

export default function SNMPReducer (state=null, action){
  switch(action.type){
    case actionTypes.DISCOVERY_OPT:
    return action.data;
    
    default:
    return state;
  }
}