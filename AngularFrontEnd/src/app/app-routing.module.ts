import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './Employee/list/list.component'
import { ListMedicineComponent } from './Medicine/list-medicine/list-medicine.component';
import { ListPatientComponent } from './Patient/list-patient/list-patient.component';

const routes: Routes = [
  {path: 'list', component:ListComponent},
  {path: 'listPatient', component:ListPatientComponent},
  {path: 'listMedicine', component:ListMedicineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
