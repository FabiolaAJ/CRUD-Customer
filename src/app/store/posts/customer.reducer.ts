import { CustomerModel } from "src/app/model/customerModel";
import * as Customer from "./customer.actions";



export function CustomerReducer (  state : CustomerModel[] = [], action: any) {

    switch (action.type) {
     
        case Customer.CUSTOMER_LIST_ERROR: 
            return action.payload
               
        case Customer.CUSTOMER_LIST_SUCCESS: 
            return action.customer
        
        default:
            return state




    }
}


