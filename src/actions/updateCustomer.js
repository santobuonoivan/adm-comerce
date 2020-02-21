import { createAction } from 'redux-actions';
import {UPDATE_CUSTOMERS} from "../constants";
import {apiPutCustomer} from "../api";
import {urlCustomer} from "../api/urls";


export const updateCustomer = createAction(UPDATE_CUSTOMERS,
    (client_id, customer) => apiPutCustomer(urlCustomer,client_id,customer)());