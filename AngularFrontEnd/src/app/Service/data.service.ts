import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../Model/Employee';
import {Patient} from '../Model/Patient';
import {Medicine} from '../Model/Medicine';
import {Room} from '../Model/Room';
import {PatientRoom} from '../Model/PatientRoom';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = '/ClinicaWeb-1.0-SNAPSHOT';
  urlEmployee = '/EmployeeServlet';
  urlPatient = '/crudpatient';
  urlMedicine = '/crudmedicine';
  urlRoom = '/crudRoom';
  urlPatientRoom = '/crudPatientRoom'
  urlEmployeeId = '/ServletGetEmployeeId';

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

  getRoom(): Observable<Room[]>{
    return this.http.get<Room[]>(this.baseUrl+this.urlRoom);
  }

  getPatientRoom(): Observable<PatientRoom[]>{
    return this.http.get<PatientRoom[]>(this.baseUrl+this.urlPatientRoom);
  }

  getEmployeeById(id:number): Observable<Employee> {
    return this.http.get<Employee>(this.baseUrl + this.urlEmployeeId + '?id=' + id);
  }
}
