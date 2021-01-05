
import * as actionType from './shopeActionTypes';
import { toast } from 'react-toastify';
import axios from 'axios';

export const addToCart = (_id) => {
    const message = "Added in Cart!";
    const type = 'success';
    tostifyAlert(type, message);

    return {
        type: actionType.ADD_TO_CART,
        payload: { id: _id }
    }
}

export const removeFromCart = (_id) => {
    const message = "Item removed from Cart!";
    const type = 'error';
    tostifyAlert(type, message);

    return {
        type: actionType.REMOVE_FROM_CART,
        payload: { id: _id }

    }
}

export const incrmentQty = (_id) => {
    const message = "Quantity updated in cart!";
    const type = 'success';
    tostifyAlert(type, message);

    return {
        type: actionType.INCREMENT_QTY,
        payload: {
            id: _id
        }
    }
}

export const decrmentQty = (_id, qty) => {

    const message = "Quantity decremented from cart!";
    const type = 'error';
    tostifyAlert(type, message);

    return {
        type: actionType.DECREMENT_QTY,
        payload: {
            id: _id,
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
export const addToWishList = (_id) => {
    const message = "Added in Wish list";
    const type = 'success';
    tostifyAlert(type, message);
    return {
        type: actionType.ADD_TO_WISHLIST,
        payload: { id: _id }
    }

}

export const removeFromWishList = (_id) => {
    const message = "Item remove from Wish list";
    const type = 'error';
    tostifyAlert(type, message);
    return {
        type: actionType.REMOVE_FROM_WISHLIST,
        payload: { id: _id }
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

export const fetchProducts = () => {
    return async function (dispatch) {
            await axios.get('https://e-super-store.herokuapp.com/api/products').then(response => {
               const localStorageProducts =  localStorage.setItem('products',JSON.stringify(response.data.products));
                  dispatch({
                      type: actionType.FETCH_PRODUCTS,
                      payload: {
                          productList: response.data.products.length ? response.data.products : localStorageProducts
                      }
                  })
              })
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