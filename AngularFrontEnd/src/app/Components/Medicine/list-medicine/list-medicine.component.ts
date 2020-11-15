import { Component, OnInit } from '@angular/core';
import { Medicine } from 'src/app/Model/Medicine';
import { DataService } from '../../Service/data.service'

@Component({
  selector: 'app-list-medicine',
  templateUrl: './list-medicine.component.html',
  styleUrls: ['./list-medicine.component.css']
})
export class ListMedicineComponent implements OnInit {
  medicines: Medicine[];

  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.service.getMedicine().subscribe((medicinesFromApi: Medicine[]) =>{
      this.medicines = medicinesFromApi
      console.log(this.medicines);
    }, error => console.error(error));

  }

}
