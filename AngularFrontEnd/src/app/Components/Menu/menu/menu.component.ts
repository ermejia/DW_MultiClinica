import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  List(){
    this.router.navigate(["list"]);
  }
  ListDoctor(){
    this.router.navigate(["listDoctors"]);
  }
  ListPatient(){
    this.router.navigate(["listPatient"]);
  }
  ListClinic(){
    this.router.navigate(["listClinics"]);
  }
  ListMedicine(){
    this.router.navigate(["listMedicine"]);
  }
  ListRoom(){
    this.router.navigate(["listRoom"]);
  }
  ListPatientRoom(){
    this.router.navigate(["listPatientRoom"]);
  }
  ListAppointment(){
    this.router.navigate(["listAppointments"]);
  }
  History(){
    this.router.navigate(["history-patient"]);
  }
  Diagnostic(){
    this.router.navigate(["addDiagnostic"]);
  }
  Appointment(){
    this.router.navigate(["add-appoint"]);
  }

}
