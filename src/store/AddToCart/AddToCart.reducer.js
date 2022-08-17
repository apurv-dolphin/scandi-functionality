// TODO update this import when renamed
import { ADD_TO_CART, REMOVE_TO_CART } from './AddToCart.action';

/** @namespace myFirstApp/Store/AddToCart/Reducer/getInitialState */
export const getInitialState = () => ({
    // TODO set initial state
    cart: []
});

/** @namespace myFirstApp/Store/AddToCart/Reducer/AddToCartReducer */
export const AddToCartReducer = (state = getInitialState(), action) => {
    switch (action.type) {
    case ADD_TO_CART:
        // const { additem } = action;

        return {
            ...state,
            cart: [...state.cart, action.payload]
        };

    case REMOVE_TO_CART:

        return {
            ...state,
            cart: state.cart.filter((e) => e.sku !== action.payload)
        };

    default:
        return state;
    }
};

export default AddToCartReducer;
