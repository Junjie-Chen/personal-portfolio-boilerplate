import { combineReducers } from 'redux';
import dropdown from './dropdown';
import sidebar from './sidebar';
import navbar from './navbar';
import position from './position';
import popup from './popup';

const reducer = combineReducers({dropdown, sidebar, navbar, position, popup});

export default reducer;
