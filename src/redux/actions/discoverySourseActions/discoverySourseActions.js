import * as actionTypes from '../types/type'

export const dropDownValAction = (data)=>{
  return{
    type: actionTypes.DROPDOWN_VAL,
    data: data,
  }
}

export const endIpAction =(event)=>{
  return{
    type:actionTypes.END_IP_VALUE,
    event: event.target.value,
  }
} 

export const singleIpAction = (event)=>{
  return{
    type:actionTypes.SINGLE_IP_VALUE,
    event:event.target.value,
  }
}
export const startIpAction = (event)=>{
  return{
    type:actionTypes.START_IP_VALUE,
    event:event.target.value,
  }
}
