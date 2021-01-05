import * as actionType from '../Auth/authActionTypes';
import axios from 'axios';
import {API_END_POINT,DEV_API_END_POINT, REACT_APP_ENV} from '../../../AppConstant';
import { toast } from 'react-toastify';


export const userLogin =(email,password)=>{
    return async function(dispatch){
        try {
              const userToken = await axios.post(`${REACT_APP_ENV=== 'Development'? DEV_API_END_POINT:API_END_POINT}/users/login`,{
                email,
                password
              });
             
              toast.success('successful loggin!', {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });

            // storing token in localStorage
            localStorage.setItem('authToken',userToken.data.token);
            localStorage.setItem('isLoggedIn',true);
              dispatch({
                type:actionType.USER_LOGIN,
                payload:{
                    authToken:userToken.data.token,
                    isLoggedIn: true,
                }
            })
        } catch (error) {
            toast.error(error.response.data, {
                position: "top-right",
                autoClose: 7000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
            localStorage.setItem('authToken',null);
            localStorage.setItem('isLoggedIn',false);
            dispatch({
                type:actionType.USER_LOGIN,
                payload:{
                    authToken:null,
                    isLoggedIn: false
                }
            })
        }
       
    }

}


export const userLogout =()=>{
    localStorage.removeItem('authToken');
    localStorage.removeItem('isLoggedIn');
    return{
        type:actionType.USER_LOGOUT,
        payload:{
            authToken:null,
            isLoggedIn:false
        }
    }
}
