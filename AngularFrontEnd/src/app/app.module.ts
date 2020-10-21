import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {DataService} from '../app/Service/data.service';
import { ListComponent } from './Employee/list/list.component';
import { ListPatientComponent } from './Patient/list-patient/list-patient.component';
import { ListMedicineComponent } from './Medicine/list-medicine/list-medicine.component';
import { ListRoomComponent } from './Room/list-room/list-room.component';
import { ListPatientRoomComponent } from './PatientRoom/list-patient-room/list-patient-room.component';
import { MenuComponent } from './Dynamic/menu/menu.component'
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListPatientComponent,
    ListMedicineComponent,
    ListRoomComponent,
    ListPatientRoomComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService, CookieService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
