import * as actionType from '../slider/sliderActionTypes';
import axios from 'axios';
import { API_END_POINT, DEV_API_END_POINT, REACT_APP_ENV } from '../../../AppConstant';
import { toast } from 'react-toastify';


export const sliders = (authToken) => {
    return async function (dispatch) {
        try {

            const sliders = await axios.get(`${REACT_APP_ENV === 'Development' ? DEV_API_END_POINT : API_END_POINT}/sliders`);
            dispatch({
                type: actionType.SLIDERS,
                payload: {
                    slidersList: sliders.data.sliders,
                }
            })
        } catch (error) {
            const message = error.response && error.response.data ? error.response.data : 'Backend Service Stop';
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
                type: actionType.SLIDERS,
                payload: {
                    slidersList: [],
                }
            })

        }

    }

}



