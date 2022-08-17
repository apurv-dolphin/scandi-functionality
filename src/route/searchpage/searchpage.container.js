/* eslint-disable max-len */
import { connect } from 'react-redux';
import { AddToCartReducer } from 'store/AddToCart/AddToCart.reducer';
import { categoryAction } from 'store/Savedata/Savedata.action';
import { SavedataReducer } from 'store/Savedata/Savedata.reducer';

import { addItems } from 'Store/AddToCart/AddToCart.action';
import { searchAction } from 'Store/Savedata/Savedata.action';
import { withReducers } from 'Util/DynamicReducer';

import Searchpage from './searchpage.component';

export const BreadcrumbsDispatcher = import(
    /* webpackMode: "lazy", webpackChunkName: "dispatchers" */
    'Store/Breadcrumbs/Breadcrumbs.dispatcher'
);

export const CartDispatcher = import(
    /* webpackMode: "lazy", webpackChunkName: "dispatchers" */
    'Store/Cart/Cart.dispatcher'
);

/** @namespace myFirstApp/Route/Searchpage/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
    categoryDatas: state.SavedataReducer.category,
    modelId: state.SavedataReducer.modelId
});

/** @namespace myFirstApp/Route/Searchpage/Container/mapDispatchToProps */
export const mapDispatchToProps = (dispatch) => ({
    updateBreadcrumbs: (breadcrumbs) => BreadcrumbsDispatcher.then(({ default: dispatcher }) => dispatcher.update(breadcrumbs, dispatch)),
    categoryListData: (categoryDatas) => dispatch(categoryAction(categoryDatas)),
    searchIdData: (modelId) => dispatch(searchAction(modelId)),
    addData: (data) => dispatch(addItems(data))
});

// eslint-disable-next-line @scandipwa/scandipwa-guidelines/always-both-mappings
export default withReducers({
    SavedataReducer,
    AddToCartReducer
})(connect(mapStateToProps, mapDispatchToProps)(Searchpage));
