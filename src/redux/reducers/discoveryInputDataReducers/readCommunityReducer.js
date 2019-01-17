import * as actionTypes from '../../actions/types/type'

export default function communityReducer (state=null, action){
  switch(action.type){
    
    case actionTypes.SNMPV_COMMUNITY_VALUE:
    return action.event;

    default:
    return state;
  }
} 