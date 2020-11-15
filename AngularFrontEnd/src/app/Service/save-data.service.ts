import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";
import {Employee} from '../Model/Employee';

@Injectable({
  providedIn: 'root'
})
export class SaveDataService {

  baseUrl = '/ClinicaWeb-1.0-SNAPSHOT';
  urlEmployee = '/EmployeeServlet';

  constructor(private http:HttpClient) { }

  createEmployee(employee: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl+this.urlEmployee}`, employee);
  }
}
