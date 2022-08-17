/* eslint-disable max-len */
import { connect } from 'react-redux';
import { AddToCartReducer } from 'store/AddToCart/AddToCart.reducer';

import { removeItems } from 'Store/AddToCart/AddToCart.action';
import { withReducers } from 'Util/DynamicReducer';

import CartPage from './CartPage.component';

export const BreadcrumbsDispatcher = import(
    /* webpackMode: "lazy", webpackChunkName: "dispatchers" */
    'Store/Breadcrumbs/Breadcrumbs.dispatcher'
);

export const CartDispatcher = import(
    /* webpackMode: "lazy", webpackChunkName: "dispatchers" */
    'Store/Cart/Cart.dispatcher'
);

/** @namespace myFirstApp/Route/CartPage/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
    cartProduct: state.AddToCartReducer.cart
});

/** @namespace myFirstApp/Route/CartPage/Container/mapDispatchToProps */
export const mapDispatchToProps = (dispatch) => ({
    updateBreadcrumbs: (breadcrumbs) => BreadcrumbsDispatcher.then(
        ({ default: dispatcher }) => dispatcher.update(breadcrumbs, dispatch)
    ),
    removeProduct: (sku) => dispatch(removeItems(sku))
});

// eslint-disable-next-line @scandipwa/scandipwa-guidelines/always-both-mappings
export default withReducers({
    AddToCartReducer
})(connect(mapStateToProps, mapDispatchToProps)(CartPage));
