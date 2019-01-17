import * as actionTypes from '../../actions/types/type'

export default function step(state=1, action){
  switch(action.type){
    case actionTypes.NEXT_STEP:
    return state + action.data;

    case actionTypes.PREV_STEP:
    return state - action.data;

    default:
    return state;
  }
}