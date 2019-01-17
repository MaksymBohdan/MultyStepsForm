import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers/allReducers'
import thunk from 'redux-thunk';

const DevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, compose(applyMiddleware(thunk), DevTools));

export default store;