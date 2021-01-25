import * as actionType from './authActionTypes';

const authReducer = (state = [], action) => {
    switch (action.type) {
        case actionType.USER_LOGIN:
            return {
                ...state,
                authToken: action.payload.authToken,
                isLoggedIn: action.payload.isLoggedIn,
                isLoading: action.payload.isLoading
            }

        case actionType.USER_SIGNUP:
            return {
                ...state,
                authToken: action.payload.authToken,
                isLoggedIn: action.payload.isLoggedIn,
                isLoading: action.payload.isLoading

            }

        case actionType.USER_LOGOUT:
            return {
                ...state,
                authToken: action.payload.authToken,
                isLoggedIn: action.payload.isLoggedIn,
                isLoading: action.payload.isLoading
            }

        default:
            return state;

    }
}

export default authReducer;