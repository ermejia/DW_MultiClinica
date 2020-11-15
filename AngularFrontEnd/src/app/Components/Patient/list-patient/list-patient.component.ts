import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/Model/Patient';
import {DataService} from '../../Service/data.service';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.css']
})
export class ListPatientComponent implements OnInit {
  patients:Patient[];

  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.service.getPatient().subscribe((patientsFromApi: Patient[]) =>{
      this.patients = patientsFromApi
      console.log(this.patients);
    }, error => console.error(error));
  }

}
