import { createAction } from 'redux-actions';
import {UPDATE_PRODUCTS} from "../constants";
import {apiPutProduct} from "../api";
import {urlProduct} from "../api/urls";


export const updateProduct = createAction(UPDATE_PRODUCTS,
    (product_id, product) => apiPutProduct(urlProduct,product_id,product)());