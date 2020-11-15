import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class SaveDataService {

  baseUrl = '/ClinicaWeb-1.0-SNAPSHOT';
  urlEmployee = '/EmployeeServlets';
  urlMedicine = '/crudmedicines';
  urlPatient = '/crudPatients';
  urlClinic =  '/crudClinics';
  urlAppoint = '/crudAppointments';
  urlPatientRoom = '/crudPatientRooms';
  urlRoom = '/crudRooms';
  urlDiagnostic = '/crudDiagnostic';


  constructor(private http:HttpClient) { }

  createEmployee(employee: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl+this.urlEmployee}`, employee);
  }

  createMedicine(medicine: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl+this.urlMedicine}`, medicine);
  }

  createPatient(patient: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl+this.urlPatient}`, patient);
  }

  createClinic(clinic: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl+this.urlClinic}`, clinic);
  }

  createAppoint(appoint: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl+this.urlAppoint}`, appoint);
  }

  createPatientRoom(patientRoom: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl+this.urlPatientRoom}`, patientRoom);
  }

  createRoom(room: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl+this.urlRoom}`, room);
  }

  createDiagnostic(diagnostic: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl+this.urlDiagnostic}`, diagnostic);
  }

}
