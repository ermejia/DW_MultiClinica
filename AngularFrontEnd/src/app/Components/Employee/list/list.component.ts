import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Model/Employee';
import { DataService } from '../../Service/data.service';
import { Observable } from "rxjs";
import { DeleteService } from 'src/app/Service/delete.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employees: Observable<Employee[]>;

  constructor(private service:DataService, private deleteService: DeleteService,private router:Router) { }

  AddEmployee(){
    this.router.navigate(["add"]);
  }

  EditEmployee(idEmployee: number){
    this.service.getEmployeeById(idEmployee)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
    this.router.navigate(["edit"]);
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.service.getEmployees();
  }

  deleteEmployee(idEmployee: number) {
    this.deleteService.deleteEmployee(idEmployee)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
}
