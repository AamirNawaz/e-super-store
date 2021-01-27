
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import shopeReducer from './reducer/shope/shopeReducer';
import authReducer from './reducer/Auth/authReducer';
import categoryReducer from './reducer/categories/categoryReducer';
import sliderReducer from './reducer/slider/sliderReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['shope', 'auth', 'categoryReducer', 'sliderReducer']
}

const rootReducer = combineReducers({
    shope: shopeReducer,
    auth: authReducer,
    categoryReducer: categoryReducer,
    sliderReducer: sliderReducer

});

export default persistReducer(persistConfig, rootReducer);