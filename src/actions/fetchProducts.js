import { FETCH_PRODUCTS } from './../constants';
import { createAction } from 'redux-actions';

export const fetchProducts = createAction(FETCH_PRODUCTS,/* payload: null*/);