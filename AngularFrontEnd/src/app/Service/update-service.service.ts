import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateServiceService {

  baseUrl = '/ClinicaWeb-1.0-SNAPSHOT';
  urlUpdateEmployee = '/updateEmployee';
  urlUpdateMedicine = '/updateMedicine';
  urlUpdatePatient = '/updatePatient';
  urlUpdateClinic = '/updateClinic';
  urlUpdateAppoint = '/updateAppointment';
  urlPatientRoom = '/updatePatientRoom';
  urlRoom = '/updateRoom';

  constructor(private http:HttpClient) { }

  updateEmployee(employee: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl+this.urlUpdateEmployee}`, employee);
  }
  updateMedicine(medicine: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl+this.urlUpdateMedicine}`, medicine);
  }
  updatePatient(patient: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl+this.urlUpdatePatient}`, patient);
  }
  updateClinic(clinic: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl+this.urlUpdateClinic}`, clinic);
  }
  updateAppoint(appoint: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl+this.urlUpdateAppoint}`, appoint);
  }
  updatePatientRoom(patientRoom: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl+this.urlPatientRoom}`, patientRoom);
  }
  updateRoom(room: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl+this.urlRoom}`, room);
  }
}
