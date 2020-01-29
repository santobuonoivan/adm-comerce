//import { handleAction } from "redux-actions"; (1)
import { FETCH_CUSTOMERS } from "./../constants";
import { handleActions } from "redux-actions";

//(1)
//const customers = handleAction(FETCH_CUSTOMERS, state => state);/* pide constante y funcion de transformación de reducer */
export const customers = handleActions({
    [FETCH_CUSTOMERS]: (state, action)=> [...action.payload], /* en action viene del fetch de los actions */

},[]);