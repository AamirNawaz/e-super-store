import * as actionType from '../categories/categoryActionTypes';
import axios from 'axios';
import { API_END_POINT, DEV_API_END_POINT, REACT_APP_ENV } from '../../../AppConstant';
import { toast } from 'react-toastify';


export const categories = (authToken) => {
    return async function (dispatch) {
        try {
            const categories = await axios.get(`${REACT_APP_ENV === 'Development' ? DEV_API_END_POINT : API_END_POINT}/categories`, {
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                }
            }
            );
            dispatch({
                type: actionType.CATEGORIES,
                payload: {
                    categoriesList: categories.data.categories,
                    tokenExpireMessage: false
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
                type: actionType.CATEGORIES,
                payload: {
                    categoriesList: [],
                    tokenExpireMessage: true
                }
            })

        }

    }

}

export const searchCategory = () => {
    return async function (dispatch) {
        try {
            dispatch({
                type: actionType.SEARCH_CATEGORY,
                payload: {
                    categoriesList: categories.data.categories,
                    tokenExpireMessage: false
                }
            })
        } catch (error) {
            dispatch({
                type: actionType.SEARCH_CATEGORY,
                payload: {
                    categoriesList: [],
                    tokenExpireMessage: true
                }
            })
        }
    }
}
