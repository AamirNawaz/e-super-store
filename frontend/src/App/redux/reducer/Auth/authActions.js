import * as actionType from '../Auth/authActionTypes';
import axios from 'axios';
import { API_END_POINT, DEV_API_END_POINT, REACT_APP_ENV } from '../../../AppConstant';
import { toast } from 'react-toastify';


export const userLogin = (email, password) => {
    return async function (dispatch) {
        try {
            const userToken = await axios.post(`${REACT_APP_ENV === 'Development' ? DEV_API_END_POINT : API_END_POINT}/users/login`, {
                email,
                password
            });

            dispatch({
                type: actionType.USER_LOGIN,
                payload: {
                    authToken: userToken.data.token,
                    isLoggedIn: true,
                }
            })
        } catch (error) {
            const message = error.response.data ? error.response.data : 'Backend Service Stop';
            toast.error(message, {
                position: "top-right",
                autoClose: 7000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });

            dispatch({
                type: actionType.USER_LOGIN,
                payload: {
                    authToken: null,
                    isLoggedIn: false
                }
            })
        }

    }

}

export const userSignup = (userData) => {
    return async function (dispatch) {
        try {
            const userToken = await axios.post(`${REACT_APP_ENV === 'Development' ? DEV_API_END_POINT : API_END_POINT}/users/signup`, userData);

            dispatch({
                type: actionType.USER_SIGNUP,
                payload: {
                    authToken: userToken.data.token,
                    isLoggedIn: true,
                }
            })
        } catch (error) {
            const message = error.response.data ? error.response.data : 'Backend Service Stop';
            toast.error(message, {
                position: "top-right",
                autoClose: 7000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });

            dispatch({
                type: actionType.USER_SIGNUP,
                payload: {
                    authToken: null,
                    isLoggedIn: false
                }
            })
        }

    }

}

export const userLogout = () => {
    return {
        type: actionType.USER_LOGOUT,
        payload: {
            authToken: null,
            isLoggedIn: false
        }
    }
}
