import * as actionTypes from '../slider/sliderActionTypes';

const sliderReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.SLIDERS:
            return {
                ...state,
                sliders: action.payload.slidersList,
            }

        default:
            return state;
    }

}

export default sliderReducer;