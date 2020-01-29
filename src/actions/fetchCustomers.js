import { FETCH_CUSTOMERS } from './../constants';
import { createAction } from 'redux-actions';

const customers =[
    {
        custId: 1,
        dni: "27000000",
        name: "Juan Perez.",
        age: 37,
    },
    {
        custId: 2,
        dni: "30000000",
        name: "Otro",
        age: 37,
    },
    {
        custId: 3,
        dni: "33000000",
        name: "Luis Martinez",
        age: 37,
    },
];
export const fetchCustomers = createAction(FETCH_CUSTOMERS, /*payload*/ () => customers);