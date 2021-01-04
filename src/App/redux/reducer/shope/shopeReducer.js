import * as actionType from './shopeActionTypes';

const shopeReducer = (state = { products: [], cart: [], wishList: [] }, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case actionType.ADD_TO_CART:
            const item = state.products.find((product) => product._id === action.payload.id);
            const itemInCart = state.cart.find((cartItem) => cartItem._id === action.payload.id ? true : false);

            return {
                ...state,
                cart: itemInCart
                    ?
                    state.cart.map(item => item._id === action.payload.id
                        ?
                        { ...item, qty: item.qty + 1 }

                        :
                        item)

                    :
                    [...state.cart, { ...item, qty: 1 }]
            }


        case actionType.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item._id !== action.payload.id)
            }

        case actionType.INCREMENT_QTY:
            let tempCart = state.cart.map((cartItem) => {
                if (cartItem._id === action.payload.id) {
                    cartItem = { ...cartItem, qty: cartItem.qty + 1 }
                }
                return cartItem;
            })
            return {
                ...state,
                cart: tempCart
            }

        // eslint-disable-next-line no-duplicate-case
        case actionType.DECREMENT_QTY:
            let tempCartNew = [];
            if (action.payload.decrementQty === 1) {
                tempCartNew = state.cart.filter(
                    (cartItem) => cartItem._id !== action.payload.id
                );
            } else {
                tempCartNew = state.cart.map((cartItem) => {
                    if (cartItem._id === action.payload.id) {
                        cartItem = { ...cartItem, qty: cartItem.qty - 1 };
                    }
                    return cartItem;
                });
            }
            return { ...state, cart: tempCartNew };

        case actionType.CLEAR_CART:
            return {
                ...state,
                cart: []
            }


        /*****************Wishlist section********* */
        case actionType.ADD_TO_WISHLIST:
            const prodItem = state.products.find((product) => product._id === action.payload.id);
            const itemInWishlist = state.wishList.find((cartItem) => cartItem._id === action.payload.id ? true : false);

            return {
                ...state,
                wishList: itemInWishlist
                    ?
                    state.wishList.map(prodItem => prodItem._id === action.payload.id
                        ?
                        { ...prodItem, isWishList: false }

                        :
                        prodItem)

                    :
                    [...state.wishList, { ...prodItem, isWishList: true }]
            }

        case actionType.REMOVE_FROM_WISHLIST:
            return {
                ...state,
                wishList: state.wishList.filter((item) => item._id !== action.payload.id)
            }

        case actionType.CLEAR_WISHLIST:
            return {
                ...state,
                wishList: []
            }

        /***************Fetch products */
        case actionType.FETCH_PRODUCTS:
            return {
                ...state,
                products: action.payload.productList
            }

        // default case
        default:
            return state;

    }

}
export default shopeReducer;