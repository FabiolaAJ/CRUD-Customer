import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as CustomerActions from "./customer.actions";
import { map, mergeMap, catchError } from "rxjs/operators";
import { of } from "rxjs";
import Swal from "sweetalert2";
import { CustomerService } from "src/app/services/customer.service";


@Injectable()
export class CustomerEffects {
   
    getAllCustomer$ = createEffect(() => 
            
        this.actions$.pipe(
            ofType<CustomerActions.CustomersList>(CustomerActions.CUSTOMER_LIST, CustomerActions.ADD_CUSTOMER_SUCCESS,  CustomerActions.UPDATE_CUSTOMER_SUCCESS, CustomerActions.REMOVE_CUSTOMER_SUCCESS),
            mergeMap(
                () => this.customerService.getAllCustomer().pipe(
                    map((res : any) => new CustomerActions.CustomersListSuccess(res) ),
                    catchError( error => of (new CustomerActions.CustomersListError(error)))
                )
            )

        )

    )
    getCustomer$ = createEffect(() => 
            
    this.actions$.pipe(
        ofType<CustomerActions.CustomersList>(CustomerActions.GET_CUSTOMER),
        mergeMap(
            (data) => this.customerService.getCustomer(data).pipe(
                map((res : any) => new CustomerActions.GetCustomerSuccess(res) ),
                catchError( error => of (new CustomerActions.GetCustomerError(error)))
            )
        )

    )

)

    addCustomer$ = createEffect(() => 
    this.actions$
        .pipe (
            ofType<CustomerActions.AddCustomer>( CustomerActions.ADD_CUSTOMER ),
            mergeMap(
               (data) => this.customerService.addCustomer(data)
                .pipe(
                    map((res: any) => { 
                        Swal.fire(res.message,'', 'success')
                        return new CustomerActions.AddCustomerSuccess(res)}),
                
                    catchError((error: any) => { 
                      Swal.fire(error.error.message,'', 'error');
                      return of ( new CustomerActions.AddCustomerError(error));
                    })
                  ),
                ),
            ),
        )


    
    updateCustomer$ = createEffect(() => 
    this.actions$
        .pipe (
            ofType<CustomerActions.AddCustomer>( CustomerActions.UPDATE_CUSTOMER ),
            mergeMap(
                (data) => this.customerService.updateCustomer(data)
                .pipe(
                    map((res: any) => { 
                        Swal.fire(res.message,'', 'success')
                        return new CustomerActions.UpdateCustomerSuccess(res)}),
                
                    catchError((error: any) => { 
                        Swal.fire(error.error.message,'', 'error');
                        return of ( new CustomerActions.UpdateCustomerError(error));
                    })
                    ),
                ),
            ),
        )

     removeCustomer$ = createEffect(() => 
     this.actions$
         .pipe (
             ofType<CustomerActions.RemoveCustomer>( CustomerActions.REMOVE_CUSTOMER ),
             mergeMap(
                 data => this.customerService.removeCustomer(data.customer)
                 .pipe(
                    map((res: any) => { 
                        Swal.fire(res.message,'', 'success')
                        return new CustomerActions.RemoveCustomerSuccess(res.data)}),
                    
                    catchError((error: any) => { 
                     console.log(error);
                      Swal.fire(error.error.message,'', 'error');
                      return of ( new CustomerActions.RemoveCustomerError(error));
                    })
                  ),
                 ),
             ),
         )

    //   removeAllFilters$ = createEffect(() => 
    //   this.actions$
    //       .pipe (
    //           ofType<accessManagementActions.RemoveAllAccessFilters>( accessManagementActions.REMOVE_ALL_ACCESS_FILTERS ),
    //           mergeMap(
    //               data => this.accessManagementService.removeAllAccessFilters(data)
    //               .pipe(
    //                 map((res: any) => { 
    //                     Swal.fire(res.message,'', 'success')
    //                     return new accessManagementActions.RemoveAllAccessFilterSuccess(res.data)}),
                    
    //                 catchError((error: any) => { 
    //                   Swal.fire(error.error.message,'', 'error');
    //                   return of ( new accessManagementActions.RemoveAllAccessFiltersError(error));
    //                 })
    //               ),
    //           ),
    //       )
    //    );

 
  constructor(private actions$: Actions, private customerService : CustomerService) {      
  }

}