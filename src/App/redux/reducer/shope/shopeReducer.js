import * as actionType from './shopeActionTypes';
import item1 from '../../../assets/images/items/1.jpg';
import item2 from '../../../assets/images/items/2.jpg';
import item3 from '../../../assets/images/items/3.jpg';
import item4 from '../../../assets/images/items/4.jpg';
import item5 from '../../../assets/images/items/5.jpg';
import item6 from '../../../assets/images/items/6.jpg';
import item7 from '../../../assets/images/items/7.jpg';
import item8 from '../../../assets/images/items/8.jpg';
import item9 from '../../../assets/images/items/9.jpg';
const InitialState = {
    products: [
        {
            productID: 1,
            productName: 'Naik',
            price: 25,
            details: 'Naik shoes for sport jugger type',
            image: item1,
            manufacturer: 'nike company',
            guarantee: '1.5 year',
            deliveryTime: '3-5',
            availabilty: true,
            orders: '4',
            reviews: '55',
            qty: 1
        },
        {
            productID: 2,
            productName: 'Hussh puppies',
            price: 590,
            details: 'hussh puppies jogger sports shoe',
            image: item2,
            manufacturer: 'nike company',
            guarantee: '1.5 year',
            deliveryTime: '3-5',
            availabilty: true,
            orders: '4',
            reviews: '55',
            qty: 1

        },
        {
            productID: 3,
            productName: 'Cat woker',
            price: 350,
            details: 'Cat A hilly area super climber shoe',
            image: item3,
            manufacturer: 'nike company',
            guarantee: '1.5 year',
            deliveryTime: '3-5',
            availabilty: true,
            orders: '4',
            reviews: '55',
            qty: 1

        },
        {
            productID: 4,
            productName: 'Burjan shoes W',
            price: 24,
            details: 'Burjan shoes Juggar details description',
            image: item4,
            manufacturer: 'nike company',
            guarantee: '1.5 year',
            deliveryTime: '3-5',
            availabilty: true,
            orders: '4',
            reviews: '55',
            qty: 1
        },
        {
            productID: 5,
            productName: 'Burjan shoes Juggar',
            price: 150,
            details: 'Burjan shoes Juggar details description',
            image: item5,
            manufacturer: 'nike company',
            guarantee: '1.5 year',
            deliveryTime: '3-5',
            availabilty: true,
            orders: '4',
            reviews: '55',
            qty: 1

        },
        {
            productID: 6,
            productName: 'Uneaza shoes',
            price: 500,
            details: 'A supper climber unezay',
            image: item6,
            manufacturer: 'nike company',
            guarantee: '1.5 year',
            deliveryTime: '3-5',
            availabilty: true,
            orders: '4',
            reviews: '55',
            qty: 1

        },
        {
            productID: 7,
            productName: 'NEw Brand shoes',
            price: 340,
            details: 'Naik shoes for sport jugger type',
            image: item7,
            manufacturer: 'nike company',
            guarantee: '1.5 year',
            deliveryTime: '3-5',
            availabilty: true,
            orders: '4',
            reviews: '55',
            qty: 1
        },
        {
            productID: 8,
            productName: 'Bata shoes for causal',
            price: 780,
            details: 'hussh puppies jogger sports shoe',
            image: item8,
            manufacturer: 'nike company',
            guarantee: '1.5 year',
            deliveryTime: '3-5',
            availabilty: true,
            orders: '4',
            reviews: '55',
            qty: 1

        },
        {
            productID: 9,
            productName: 'Cat woker',
            price: 134,
            details: 'Cat A hilly area super climber shoe',
            image: item9,
            manufacturer: 'nike company',
            guarantee: '1.5 year',
            deliveryTime: '3-5',
            availabilty: true,
            orders: '4',
            reviews: '55',
            qty: 1

        }
    ],
    cart: [],
    wishList: []
}

const shopeReducer = (state = InitialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case actionType.ADD_TO_CART:
            const item = state.products.find((product) => product.productID === action.payload.id);
            const itemInCart = state.cart.find((cartItem) => cartItem.productID === action.payload.id ? true : false);

            return {
                ...state,
                cart: itemInCart
                    ?
                    state.cart.map(item => item.productID === action.payload.id
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
                cart: state.cart.filter((item) => item.productID !== action.payload.id)
            }

        case actionType.INCREMENT_QTY:
            let tempCart = state.cart.map((cartItem) => {
                if (cartItem.productID === action.payload.id) {
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
                    (cartItem) => cartItem.productID !== action.payload.id
                );
            } else {
                tempCartNew = state.cart.map((cartItem) => {
                    if (cartItem.productID === action.payload.id) {
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
            const prodItem = state.products.find((product) => product.productID === action.payload.id);
            const itemInWishlist = state.wishList.find((cartItem) => cartItem.productID === action.payload.id ? true : false);

            return {
                ...state,
                wishList: itemInWishlist
                    ?
                    state.wishList.map(prodItem => prodItem.productID === action.payload.id
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
                wishList: state.wishList.filter((item) => item.productID !== action.payload.id)
            }

        case actionType.CLEAR_WISHLIST:
            return {
                ...state,
                wishList: []
            }


        // default case
        default:
            return state;

    }

}
export default shopeReducer;