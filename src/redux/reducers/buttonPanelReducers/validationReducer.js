import * as actionTypes from '../../actions/types/type'

export default function count (state=true, action){
  switch(action.type){
    case actionTypes.VALIDATION_IP:
    return action.data;
    
    default:
    return state;
  }
}