import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/Model/Employee';
import { DataService } from 'src/app/Service/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  employee: Employee;
  employeeForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,private router: Router,
    private service: DataService) { }

  ngOnInit(): void {
  }

  gotoList() {
    this.router.navigate(['list']);
  }
}
