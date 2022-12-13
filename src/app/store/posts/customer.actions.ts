import { Action } from "@ngrx/store";
import { CustomerModel } from "src/app/model/customerModel";

export const ADD_CUSTOMER = '[ADD CUSTOMER] Add Customer';
export const ADD_CUSTOMER_ERROR = '[ADD CUSTOMER ERROR] Customer error';
export const ADD_CUSTOMER_SUCCESS = '[ADD CUSTOMER SUCCESS] Customer success';

export const REMOVE_CUSTOMER = '[REMOVE CUSTOMER] Remove Customer';
export const REMOVE_CUSTOMER_ERROR = '[REMOVE CUSTOMER ERROR] Remove Customer error';
export const REMOVE_CUSTOMER_SUCCESS = '[REMOVE CUSTOMER SUCCESS] Remove Customer success';

export const CUSTOMER_LIST = '[GET CUSTOMER] Customer List';
export const CUSTOMER_LIST_ERROR = '[CUSTOMER ERROR] Customer Error';
export const CUSTOMER_LIST_SUCCESS = '[CUSTOMER SUCCESS] Customer Success';

export const GET_CUSTOMER = '[GET CUSTOMER] Customer List';
export const GET_CUSTOMER_ERROR = '[CUSTOMER ERROR] Customer Error';
export const GET_CUSTOMER_SUCCESS = '[CUSTOMER SUCCESS] Customer Success';

export const UPDATE_CUSTOMER = '[UPDATE CUSTOMER] UPDATE Customer';
export const UPDATE_CUSTOMER_ERROR = '[UPDATE CUSTOMER ERROR] Customer error';
export const UPDATE_CUSTOMER_SUCCESS = '[UPDATE CUSTOMER SUCCESS] Customer success';



export class CustomersList implements Action {
    readonly type = CUSTOMER_LIST;

    constructor () {}
}

export class CustomersListError implements Action {
    readonly type = CUSTOMER_LIST_ERROR;

    constructor (public payload: any) {}
}

export class  CustomersListSuccess implements Action {

    readonly type = CUSTOMER_LIST_SUCCESS;
    
    constructor ( public customer : CustomerModel ) {}
}

export class AddCustomer implements Action {
    
    readonly type = ADD_CUSTOMER;

    constructor ( public customer : CustomerModel) {}
}

export class AddCustomerError implements Action {
    readonly type = ADD_CUSTOMER_ERROR;

    constructor (public payload: any) {}
}

export class  AddCustomerSuccess implements Action {
    readonly type = ADD_CUSTOMER_SUCCESS;

    
    constructor ( public customers  : any ) {}
}


export class UpdateCustomer implements Action {
    
    readonly type = UPDATE_CUSTOMER;

    constructor ( public customer : CustomerModel) {}
}

export class UpdateCustomerError implements Action {
    readonly type = UPDATE_CUSTOMER_ERROR;

    constructor (public payload: any) {}
}

    export class  UpdateCustomerSuccess implements Action {
    readonly type = UPDATE_CUSTOMER_SUCCESS;

    
    constructor ( public customers  : any ) {}
}



export class RemoveCustomer implements Action {
    
    readonly type = REMOVE_CUSTOMER;

    constructor ( public customer : any) {}
}

export class RemoveCustomerError implements Action {
    readonly type = REMOVE_CUSTOMER_ERROR;

    constructor (public payload: any) {}
}

export class  RemoveCustomerSuccess implements Action {
    readonly type = REMOVE_CUSTOMER_SUCCESS;
    
    constructor ( public payload : any ) {}
}


export class GetCustomer implements Action {
    
    readonly type = GET_CUSTOMER;

    constructor ( public customer : any) {}
}

export class GetCustomerError implements Action {
    readonly type = GET_CUSTOMER_ERROR;

    constructor (public payload: any) {}
}

export class GetCustomerSuccess implements Action {
    readonly type = GET_CUSTOMER_SUCCESS;
    
    constructor ( public payload : any ) {}
}

export type Actions = 
| CustomersList
| CustomersListSuccess
| CustomersListError
| AddCustomer
| AddCustomerError
| AddCustomerSuccess
| RemoveCustomer
| RemoveCustomerError
| RemoveCustomerSuccess
| GetCustomer
| GetCustomerSuccess
| GetCustomerError
| UpdateCustomer
| UpdateCustomerSuccess
| UpdateCustomerError

