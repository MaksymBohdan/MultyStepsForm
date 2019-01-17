import * as actionTypes from '../../actions/types/type'

export default function endIpReducer(state="", action){
  switch(action.type) {
      
    case actionTypes.END_IP_VALUE:
    return action.event;

    default:
    return state;
    } 
}
