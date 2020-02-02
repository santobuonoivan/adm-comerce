import { FETCH_CUSTOMERS } from './../constants';
import { createAction } from 'redux-actions';
import { apiGetCustomers } from './../api';
import { urlCustomer } from './../api/urls';

export const fetchCustomers = createAction(FETCH_CUSTOMERS, /*payload*/ apiGetCustomers(urlCustomer));