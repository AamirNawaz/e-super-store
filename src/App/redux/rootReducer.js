
import { combineReducers } from 'redux';
import shopeReducer from './reducer/shope/shopeReducer';
import authReducer from './reducer/Auth/authReducer';
const rootReducer = combineReducers({
    shope: shopeReducer,
    auth:authReducer

});

export default rootReducer;