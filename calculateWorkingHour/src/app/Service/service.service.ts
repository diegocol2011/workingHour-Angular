import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Report } from '../Models/Report';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/api';
  
  getReports(){
    return this.http.get<Report[]>(this.Url);
  }

  saveReport(Report:Report){
    return this.http.post<Report>(this.Url+"/guardar", Report);
  }

  // getReportId(id:number){
  //   return this.http.get<Report>(this.Url+"/"+id);
  // }

  // updateReport(Report:Report){
  //   return this.http.put<Report>(this.Url+"/"+Report.id,Report);
  // }

  // deleteReport(Report:Report){
  //   return this.http.delete<Report>(this.Url+"/"+Report.id);
  // }
}
