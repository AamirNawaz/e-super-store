
import { combineReducers } from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import shopeReducer from './reducer/shope/shopeReducer';
import authReducer from './reducer/Auth/authReducer';


const persistConfig ={
    key:'root',
    storage,
    whitelist:['shope','auth']
}

const rootReducer = combineReducers({
    shope: shopeReducer,
    auth:authReducer

});

export default persistReducer(persistConfig, rootReducer);