import * as actionTypes from '../../actions/types/type'

export default function toggleHandlerSNMP(state = false, action) {
  switch (action.type) {
    case actionTypes.TOGGLE_SNMP:
      return !state;
    default:
      return state;
  }
}
