import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {


  baseUrl = '/ClinicaWeb-1.0-SNAPSHOT';
  urlEmployee = '/deleteEmployee';
  urlMedicine = '/deleteMedicine';
  urlPatient = '/deletePatient';
  urlClinic = '/deleteClinic';

  constructor(private http:HttpClient) { }

  deleteEmployee(employee: Object): Observable<any> {
    return this.http.post(`${this.baseUrl+this.urlEmployee}`, employee);
  }
  deleteMedicine(medicine: Object): Observable<any> {
    return this.http.post(`${this.baseUrl+this.urlMedicine}`, medicine);
  }
  deletePatient(patient: Object): Observable<any> {
    return this.http.post(`${this.baseUrl+this.urlPatient}`, patient);
  }
  deleteClinic(clinic: Object): Observable<any> {
    return this.http.post(`${this.baseUrl+this.urlClinic}`, clinic);
  }
}
