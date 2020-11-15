import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Model/Employee';
import { DataService } from '../../Service/data.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  employees:Employee[];
  
  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.service.getEmployees().subscribe((employeesFromApi: Employee[]) =>{
      this.employees = employeesFromApi
      console.log(this.employees);
    }, error => console.error(error));
  }

}
