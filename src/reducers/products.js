//import { handleAction } from "redux-actions"; (1)
import { FETCH_PRODUCTS } from "../constants";
import { handleActions } from "redux-actions";

//(1)
//const customers = handleAction(FETCH_CUSTOMERS, state => state);/* pide constante y funcion de transformación de reducer */
export const products = handleActions({
    [FETCH_PRODUCTS]: (state,action)=> [ ...action.payload ], /* en action viene del fetch de los actions */

},[]);