import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './Employee/list/list.component';
import {FormsModule} from '@angular/forms';
import {DataService} from '../app/Service/data.service';
import { ListPatientComponent } from './Patient/list-patient/list-patient.component';
import { ListMedicineComponent } from './Medicine/list-medicine/list-medicine.component'

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListPatientComponent,
    ListMedicineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
