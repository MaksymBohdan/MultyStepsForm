import * as actionTypes from '../../actions/types/type'

export default function singleIpReducer(state="", action){
  switch(action.type){
    case actionTypes.SINGLE_IP_VALUE:
    return action.event;
    
    default:
    return state;
  }
}