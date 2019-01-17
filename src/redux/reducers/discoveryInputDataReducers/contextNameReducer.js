import * as actionTypes from '../../actions/types/type'

export default function contextNameReducer (state=null, action){
  switch(action.type){
    
    case actionTypes.CONTEXT_NAME:
    return action.event;

    default:
    return state;
  }
} 