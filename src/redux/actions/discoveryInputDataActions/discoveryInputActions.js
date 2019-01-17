import * as actionTypes from '../types/type'

export const readSNMPV =(event)=>{
  return{
    type: actionTypes.SNMPV_COMMUNITY_VALUE,
    event: event.target.value,
  }
} 

export const contextNameInput =(event)=>{
  return{
    type: actionTypes.CONTEXT_NAME,
    event: event.target.value,
  }
}

export const contextEngineInput =(event)=>{
  return{
    type: actionTypes.CONTEXT_ENGINE,
    event: event.target.value,
  }
}

export const authenticationInput =(event)=>{
  return{
    type: actionTypes.AUTENTICATION_ENGINE,
    event: event.target.value,
  }
}

export const authenticationAndPrivacy = (data)=>{
  return{
    type: actionTypes.AUTH_PRIV,
    data: data,
  }
}

export const SNMPVersionValue = (data)=>{
  return{
    type: actionTypes.SNMP_VAL,
    data: data,
  }
}

export const discoveryOptionsValid = (data)=>{
  return{
    type: actionTypes.DISCOVERY_OPT,
    data: data,
  }
}


