import {combineReducers} from 'redux';
import step from './buttonPanelReducers/stepReducer';
import singleIP from './discoverySourseReducers/singleIpReducer';
import startIP from './discoverySourseReducers/startIpReducer';
import endIP from './discoverySourseReducers/endIpReducer';
import ipValidated from './buttonPanelReducers/validationReducer';
import readCommunity from './discoveryInputDataReducers/readCommunityReducer'
import contextName from './discoveryInputDataReducers/contextNameReducer';
import contextEngine from './discoveryInputDataReducers/contextEngineReducer';
import authenticationAlgorithm from './discoveryInputDataReducers/authenticationReducer';
import securityOptions from './discoveryInputDataReducers/authenticationAndPrivacyReducer'
import code from './discoveryInputDataReducers/SNMPVersionValueReducer';
import discoverOptionVal from './discoveryInputDataReducers/discoveryOptionsValidReducer';
import dropDownValReducer from './discoverySourseReducers/dropDownValReducer';
import toggleSNMP from './discoveryOptionsReducers/toggleHandlerSNMPReducer';

const rootReducer = combineReducers({
    step: step ,
    singleIP: singleIP,
    startIP:startIP,
    endIP: endIP, 
    ipValidated : ipValidated, 
    readCommunity: readCommunity,
    contextName: contextName,
    contextEngine :contextEngine,
    authenticationAlgorithm: authenticationAlgorithm,
    securityOptions: securityOptions,
    code : code, 
    discoveryOptionsCheckboxValue : discoverOptionVal,
    dropdownValue:dropDownValReducer,
    toggleSNMP:toggleSNMP,
})

export default rootReducer;