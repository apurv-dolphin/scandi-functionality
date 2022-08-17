// TODO rename
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_TO_CART = 'REMOVE_TO_CART';

// TODO rename
/** @namespace myFirstApp/Store/AddToCart/Action/addItems */
export const addItems = (additem) => ({
    type: ADD_TO_CART,
    payload: additem
});

/** @namespace myFirstApp/Store/AddToCart/Action/removeItems */
export const removeItems = (removeitem) => ({
    type: REMOVE_TO_CART,
    payload: removeitem
});
