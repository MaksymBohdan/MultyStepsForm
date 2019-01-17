import * as actionTypes from '../types/type'

export const nextStep =(step)=>{
  return{
    type: actionTypes.NEXT_STEP,
    data: step,
  }
}

export const prevStep =(step)=>{
  return{
    type: actionTypes.PREV_STEP,
    data:step,
  }
} 

export const validationIp = (bool)=>{
  return{
    type: actionTypes.VALIDATION_IP,
    data: bool,
  }
}