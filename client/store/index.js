import { createStore } from 'redux';
import reducer from './reducer';
import middleware from './middleware';

const store = createStore(reducer, middleware);

export default store;
export { default as reducer } from './reducer';
export { default as middleware } from './middleware';
export * from './dropdown';
export * from './sidebar';
export * from './navbar';
export * from './position';
export * from './popup';
export * from './user';

