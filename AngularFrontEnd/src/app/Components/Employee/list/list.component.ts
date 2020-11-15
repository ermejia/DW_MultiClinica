import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Model/Employee';
import { DataService } from '../../../Service/data.service';
import { Observable } from "rxjs";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employees: Observable<Employee[]>;

  constructor(private service:DataService, private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.service.getEmployees();
  }
  AddEmployee(){
    this.router.navigate(["add"]);
  }

  EditEmployee(id:number){
    this.router.navigate(["edit", id]);
  }
}
