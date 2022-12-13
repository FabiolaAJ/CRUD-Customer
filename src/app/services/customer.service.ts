import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, EventEmitter, Output} from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map, switchMap } from 'rxjs/operators';
import { CustomerModel } from '../model/customerModel';


@Injectable({
  providedIn: 'root'
})

export class CustomerService {


    constructor(private http: HttpClient) {

    }

    getAllCustomer() : Observable<any> {

        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=UTF-8', 
        });

        return  this.http.get('http://localhost:3000/list', {headers: headers})
    }
 

    getCustomer(data :any) : Observable<any> {

        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=UTF-8', 
        });

        return  this.http.get('http://localhost:3000/update/'+data.customer)
    }
     
    addCustomer (data: any) :Observable<any>  {    

        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=UTF-8', 
        });

       
        
        return this.http.post('http://localhost:3000/add', data.customer, {headers: headers})
    
    }

    updateCustomer (data : any) :Observable<any>  {    

        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=UTF-8', 
        });

       
        return this.http.post('http://localhost:3000/update', data.customer, {headers: headers})
    
    }
    
    removeCustomer (id: number) :Observable<any>  {    
        
        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=UTF-8', 
        });

        console.log(id)
        return this.http.get('http://localhost:3000/delete/'+id)
    
    }

    // removeAllAccessFilters(data : any) : Observable<AccessManagementModel>{
        
    //     return this.authService.authToken()
    //     .pipe(switchMap(auth => {
    //         const headers = new HttpHeaders({
    //             'Content-Type': 'application/json', 
    //             'Authorization': `Bearer ${auth.data.token}`
    //         });
        
    //         return this.http.delete(baseAPI + '/v1/filtro/removeAll/'+data.tipo_categoria ,{headers : headers})
    //     }));
    // }

 
}