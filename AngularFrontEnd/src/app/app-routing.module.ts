import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { MenuComponent } from './Dynamic/menu/menu.component';
import { ListComponent } from './Employee/list/list.component'
import { ListMedicineComponent } from './Medicine/list-medicine/list-medicine.component';
import { ListPatientComponent } from './Patient/list-patient/list-patient.component';
import { ListPatientRoomComponent } from './PatientRoom/list-patient-room/list-patient-room.component';
import { ListRoomComponent } from './Room/list-room/list-room.component';


const routes: Routes = [
  {path: "nav", component:MenuComponent},
  {path: 'list', component:ListComponent},
  {path: 'listPatient', component:ListPatientComponent},
  {path: 'listMedicine', component:ListMedicineComponent},
  {path: 'listRoom', component:ListRoomComponent},
  {path: 'listPatientRoom', component:ListPatientRoomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
