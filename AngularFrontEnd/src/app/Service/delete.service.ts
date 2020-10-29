import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {


  baseUrl = '/ClinicaWeb-1.0-SNAPSHOT';
  urlEmployee = '/EmployeeServlet';

  constructor(private http:HttpClient) { }

  deleteEmployee(idEmployee: number): Observable<any> {
    return this.http.post(`${this.baseUrl+this.urlEmployee}`, idEmployee);
  }
}
