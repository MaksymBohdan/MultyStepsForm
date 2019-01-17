import * as actionTypes from '../../actions/types/type'

export default function SNMPReducer (state=null, action){
  switch(action.type){
    case actionTypes.SNMP_VAL:
    return action.data;
    
    default:
    return state;
  }
}