import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../Model/Employee';
import {Patient} from '../Model/Patient';
import {Medicine} from '../Model/Medicine';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = '/ClinicaWeb-1.0-SNAPSHOT';
  urlEmployee = '/crudemployee'
  urlPatient = '/crudpatient';
  urlMedicine = '/crudmedicine'
  constructor(private http:HttpClient) { }



  getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseUrl+this.urlEmployee);
  }


  getPatient(): Observable<Patient[]>{
    return this.http.get<Patient[]>(this.baseUrl+this.urlPatient);
  }

  getMedicine(): Observable<Medicine[]>{
    return this.http.get<Medicine[]>(this.baseUrl+this.urlMedicine);
  }


}
