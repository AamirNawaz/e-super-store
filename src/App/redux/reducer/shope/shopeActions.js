
import * as actionType from './shopeActionTypes';
import { toast } from 'react-toastify';

export const addToCart = (productID) => {
    const message = "Added in Cart!";
    const type = 'success';
    tostifyAlert(type, message);

    return {
        type: actionType.ADD_TO_CART,
        payload: { id: productID }
    }
}

export const removeFromCart = (productID) => {
    const message = "Item removed from Cart!";
    const type = 'error';
    tostifyAlert(type, message);

    return {
        type: actionType.REMOVE_FROM_CART,
        payload: { id: productID }

    }
}

export const incrmentQty = (productID) => {
    const message = "Quantity updated in cart!";
    const type = 'success';
    tostifyAlert(type, message);

    return {
        type: actionType.INCREMENT_QTY,
        payload: {
            id: productID
        }
    }
}

export const decrmentQty = (productID, qty) => {

    const message = "Quantity decremented from cart!";
    const type = 'error';
    tostifyAlert(type, message);

    return {
        type: actionType.DECREMENT_QTY,
        payload: {
            id: productID,
            decrementQty: qty
        }
    }
}

export const clearCart = () => {
    const message = "Cart item cleared!";
    const type = 'error';
    tostifyAlert(type, message);

    return {
        type: actionType.CLEAR_CART,
        payload: {
            cart: []
        }
    }
}

/************* Wish list section **********/
export const addToWishList = (productID) => {
    const message = "Added in Wish list";
    const type = 'success';
    tostifyAlert(type, message);
    return {
        type: actionType.ADD_TO_WISHLIST,
        payload: { id: productID }
    }

}

export const removeFromWishList = (productID) => {
    const message = "Item remove from Wish list";
    const type = 'error';
    tostifyAlert(type, message);
    return {
        type: actionType.REMOVE_FROM_WISHLIST,
        payload: { id: productID }
    }
}

export const clearWishList = () => {
    const message = "Wish list item cleared!";
    const type = 'error';
    tostifyAlert(type, message);

    return {
        type: actionType.CLEAR_WISHLIST,
        payload: {
            wishList: []
        }
    }
}


const tostifyAlert = (type, message) => {
    if (type === 'success') {
        return toast.success(message, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
    }
    if (type === 'error') {
        return toast.error(message, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
    }

}