import { Component, OnInit } from '@angular/core';
import { PatientRoom } from 'src/app/Model/PatientRoom';
import {DataService} from '../../Service/data.service';

@Component({
  selector: 'app-list-patient-room',
  templateUrl: './list-patient-room.component.html',
  styleUrls: ['./list-patient-room.component.css']
})
export class ListPatientRoomComponent implements OnInit {
  patientRooms:PatientRoom[];

  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.service.getPatientRoom().subscribe((patientsFromApi: PatientRoom[]) =>{
      this.patientRooms = patientsFromApi
      console.log(this.patientRooms);
    }, error => console.error(error));
  }
}
