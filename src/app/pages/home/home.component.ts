import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app-state';
import { CustomerModel } from 'src/app/model/customerModel';
import * as Customer from 'src/app/store/posts/customer.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  formAdd : FormGroup;

  readonly CustomerList$: Observable<CustomerModel[]> = this.store.select('customers');
  CustomerList : CustomerModel[] = [];
  public update = false;

  constructor(private store: Store<AppState>, private formBuilder : FormBuilder, private el: ElementRef)  {

    this.formAdd = this.formBuilder.group({
      name : ['',Validators.required], 
      email : ['', Validators.required] ,
      phone: [''],
      id: ['']

    })
   }

  ngOnInit() {

    this.getAllCustomer();
    
    this.CustomerList$.subscribe((res : any) => { 
     
      if(res.length > 0){
        if(res.length > 1){
          this.CustomerList = res;
        }else{
          this.CustomerList = [...this.CustomerList, ...res]
           
        }
      }
    

    }) 
  }
  
  async addCustomer(){

    if(this.formAdd.status != "INVALID"){
      
      this.store.dispatch(new Customer.AddCustomer(this.formAdd.value));
    
    }
    

  }
  async removeCustomer(customer : any){
    this.store.dispatch(new Customer.RemoveCustomer(customer.id));

  }

  async getCustomer(customer :any){
    this.formAdd.setValue({
      name : customer.name,
      email: customer.email,
      phone: customer.phone,
      id: customer.id
    });  
    
    this.update = true;
  }

  async updateCustomer(){
     
    if(this.formAdd.status != "INVALID"){
      this.store.dispatch(new Customer.UpdateCustomer(this.formAdd.value));
    }

    this.formAdd.reset();

  }

  async getAllCustomer(){
    this.store.dispatch(new Customer.CustomersList());
  }
}
