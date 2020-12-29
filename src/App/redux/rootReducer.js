
import { combineReducers } from 'redux';
import shopeReducer from './reducer/shope/shopeReducer';

const rootReducer = combineReducers({
    shope: shopeReducer,

});

export default rootReducer;