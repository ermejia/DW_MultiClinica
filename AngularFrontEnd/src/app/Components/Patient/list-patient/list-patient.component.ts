import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/Model/Patient';
import {DataService} from '../../../Service/data.service';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.css']
})
export class ListPatientComponent implements OnInit {
  patients: Observable<Patient[]>;

  constructor(private service:DataService, private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.patients = this.service.getPatients();
  }

  AddPatient(){
    this.router.navigate(["add-patient"]);
  }

  EditPatient(id:number){
    this.router.navigate(["edit-patient", id]);
  }
}
