import * as actionType from './authActionTypes';

const authReducer = (state =[{authToken:null,isLoggedIn:false}],action)=>{
    switch (action.type){
        case actionType.USER_LOGIN:
            console.log('auth reducer',action.payload);
            return{
                ...state,
                authToken:action.payload.authToken,
                isLoggedIn:action.payload.isLoggedIn
            }

        case actionType.USER_LOGOUT:
            return{
                ...state,
                authToken:action.payload.authToken,
                isLoggedIn:action.payload.isLoggedIn
            }

         default:
            return state;
            
    }
}

export default authReducer;