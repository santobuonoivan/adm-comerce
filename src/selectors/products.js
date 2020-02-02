import {createSelector} from 'reselect';

export const getProducts = state => state.products;

export const getProductByProductId = createSelector(
    (state,props) => state.products.find( p => p.product_id === parseInt(props.product_id)),
    product => product
);