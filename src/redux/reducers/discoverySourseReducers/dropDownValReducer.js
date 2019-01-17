import * as actionTypes from '../../actions/types/type'

export default function dropDownValReducer (state=null, action){
  switch(action.type){
    case actionTypes.DROPDOWN_VAL:
    return action.data;
    
    default:
    return state;
  }
}