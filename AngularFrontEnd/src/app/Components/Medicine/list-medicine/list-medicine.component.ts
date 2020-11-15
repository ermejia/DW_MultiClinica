import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Medicine } from 'src/app/Model/Medicine';
import { DataService } from '../../../Service/data.service'

@Component({
  selector: 'app-list-medicine',
  templateUrl: './list-medicine.component.html',
  styleUrls: ['./list-medicine.component.css']
})
export class ListMedicineComponent implements OnInit {
  medicines: Observable<Medicine[]>;

  constructor(private service:DataService, private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.medicines = this.service.getMedicines();
  }

  AddMedicine(){
    this.router.navigate(["add-medicine"]);
  }

  EditMedicine(id:number){
    this.router.navigate(["edit-medicine", id]);
  }
}
