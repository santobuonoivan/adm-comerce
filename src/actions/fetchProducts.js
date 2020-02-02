import { FETCH_PRODUCTS } from './../constants';
import { createAction } from 'redux-actions';
import {apiGetProducts} from "./../api";
import {urlProduct} from "./../api/urls";

export const fetchProducts = createAction(FETCH_PRODUCTS,/*payload*/ apiGetProducts(urlProduct));