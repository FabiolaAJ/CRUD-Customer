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

       
        return this.http.put('http://localhost:3000/update', data.customer,{headers: headers} )
    
    }
    
    removeCustomer (id: number) :Observable<any>  {    
        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=UTF-8', 
        });
        
        return this.http.delete('http://localhost:3000/delete/'+id,{headers: headers}  )
    }

 

 
}