import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Diagnostic } from 'src/app/Model/DIagnostic';
import { Doctor } from 'src/app/Model/Doctor';
import { Medicine } from 'src/app/Model/Medicine';
import { DataService } from 'src/app/Service/data.service';
import { SaveDataService } from 'src/app/Service/save-data.service';

@Component({
  selector: 'app-add-diagnostic',
  templateUrl: './add-diagnostic.component.html',
  styleUrls: ['./add-diagnostic.component.css']
})
export class AddDiagnosticComponent implements OnInit {

  diagnostic: Diagnostic = new Diagnostic();
  submitted = false;
  doctors: Observable<Doctor[]>;
  medicines: Observable<Medicine[]>;
  alert: boolean = false;

  constructor(private router: Router, private service: SaveDataService, private dataService: DataService) { }

  ngOnInit(): void {
    this.getData();
  }

  newDiagnostic(): void {
    this.submitted = false;
    this.diagnostic = new Diagnostic();
  }

  getData(): void {
    this.doctors = this.dataService.getDoctors();

    this.medicines = this.dataService.getMedicines();
  }

  save() {
    this.service
    .createDiagnostic(this.diagnostic).subscribe(data => {
      this.diagnostic = new Diagnostic();
      this.gotoList();
    });
    this.alert = true;
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(["addDiagnostic"]);
  }

}
