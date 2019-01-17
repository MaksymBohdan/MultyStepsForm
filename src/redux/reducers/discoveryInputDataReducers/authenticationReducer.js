import * as actionTypes from '../../actions/types/type'

export default function authenticationReducer (state=null, action){
  switch(action.type){
    
    case actionTypes.AUTENTICATION_ENGINE:
    return action.event;

    default:
    return state;
  }
} 