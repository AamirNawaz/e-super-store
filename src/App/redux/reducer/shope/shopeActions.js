
import * as actionType from './shopeActionTypes';

export const addToCart = (productID) => {
    return {
        type: actionType.ADD_TO_CART,
        payload: { id: productID }
    }
}

export const removeFromCart = (productID) => {
    return {
        type: actionType.REMOVE_FROM_CART,
        payload: { id: productID }

    }
}

export const incrmentQty = (productID) => {
    return {
        type: actionType.INCREMENT_QTY,
        payload: {
            id: productID
        }
    }
}

export const decrmentQty = (productID, qty) => {
    return {
        type: actionType.DECREMENT_QTY,
        payload: {
            id: productID,
            decrementQty: qty
        }
    }
}

export const clearCart = () => {
    return {
        type: actionType.CLEAR_CART,
        payload: {
            cart: []
        }
    }
}