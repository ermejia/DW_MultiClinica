import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/Model/Patient';
import { DataService } from 'src/app/Service/data.service';
import { DeleteService } from 'src/app/Service/delete.service';
import { UpdateServiceService } from 'src/app/Service/update-service.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {

  dpi: number;
  public patient: Patient[];
  patients: Patient = new Patient();
  alertUpdate: boolean = false;
  alertDelete: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private patientService: DataService,
    private updatePatient: UpdateServiceService, private deleteService:DeleteService) {
  }

  ngOnInit(){
    this.patientService.getPatient(this.route.snapshot.params.id).subscribe((result)=>{
      this.patient = result;
    })}

  save() {
    this.updatePatient
      .updatePatient(this.patient).subscribe(data => {
        this.gotoList();
      });
      this.alertUpdate=true;
    }

  onSubmit(){
    this.save();
  }

  deletePatient() {
    this.deleteService
      .deletePatient(this.patient).subscribe(data => {
        this.gotoList();
      });
      this.alertDelete=true;
    }


  gotoList() {
    this.router.navigate(["listPatient"]);
  }
}
