import { combineReducers, applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import dropdown from './dropdown';
import sidebar from './sidebar';
import navbar from './navbar';
import position from './position';

const reducer = combineReducers({dropdown, sidebar, navbar, position});
const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger({collapsed: true})));
const store = createStore(reducer, middleware);

export default store;
export * from './dropdown';
export * from './sidebar';
export * from './navbar';
export * from './position';
