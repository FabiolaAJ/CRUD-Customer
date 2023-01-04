import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { CustomerReducer } from './store/customer/customer.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CustomerEffects } from './store/customer/customer.effects';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    StoreModule.forRoot({
      customers: CustomerReducer,
     
    }),

    EffectsModule.forRoot(
      [CustomerEffects]
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
