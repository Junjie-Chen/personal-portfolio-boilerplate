import { combineReducers } from 'redux';
import dropdown from './dropdown';
import sidebar from './sidebar';
import navbar from './navbar';
import position from './position';

const reducer = combineReducers({dropdown, sidebar, navbar, position});

export default reducer;
