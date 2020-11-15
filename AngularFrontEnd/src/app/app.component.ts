import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MultiClinicaWeb';

  constructor(private router:Router){
  }

  List(){
    this.router.navigate(["list"]);
  }
  ListPatient(){
    this.router.navigate(["listPatient"]);
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

}
