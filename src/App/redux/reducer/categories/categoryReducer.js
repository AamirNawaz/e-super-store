import * as actionTypes from '../categories/categoryActionTypes';

const categoryReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.CATEGORIES:
            return {
                ...state,
                categories: action.payload.categoriesList,
                tokenExpireMessage: action.payload.tokenExpireMessage
            }

        default:
            return state;
    }
}

export default categoryReducer;