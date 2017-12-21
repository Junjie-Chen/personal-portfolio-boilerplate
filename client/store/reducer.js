import { combineReducers } from 'redux';
import dropdown from './dropdown';
import sidebar from './sidebar';
import navbar from './navbar';
import position from './position';
import popup from './popup';
import user from './user';

const reducer = combineReducers({dropdown, sidebar, navbar, position, popup, user});

export default reducer;
