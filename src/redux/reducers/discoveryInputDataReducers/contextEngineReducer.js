import * as actionTypes from '../../actions/types/type'

export default function contextEngineReducer (state=null, action){
  switch(action.type){
    
    case actionTypes.CONTEXT_ENGINE:
    return action.event;

    default:
    return state;
  }
} 