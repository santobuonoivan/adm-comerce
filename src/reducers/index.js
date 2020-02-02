import { combineReducers } from "redux";
import { customers } from './customers';
import { products } from './products';
import { reducer as reduxForm } from 'redux-form';

export default combineReducers({
    products,
    customers,
    form: reduxForm
});