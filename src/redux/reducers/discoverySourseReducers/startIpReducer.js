import * as actionTypes from '../../actions/types/type'

export default function startIpReducer(state="", action){
  switch(action.type){
    
    case actionTypes.START_IP_VALUE:
    return action.event;

    default:
    return state;
  }
}