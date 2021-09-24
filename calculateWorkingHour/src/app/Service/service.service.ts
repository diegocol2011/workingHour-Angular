import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Report } from '../Models/Report';
import { WorkingHourDto } from '../Models/WorkingHourDto';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8080/api';

  getReportById(id: number) {
    return this.http.get<Report>(this.Url + "/find/" + id);
  }

  getReports() {
    return this.http.get<Report[]>(this.Url + "/find");
  }

  saveReport(report: Report) {
    return this.http.post<Report>(this.Url + "/save", report);
  }

  getWorkingHour(idTecnico: string, numeroSemana: number) {
    return this.http.get<WorkingHourDto>(this.Url + "/find/" + idTecnico + "/" + numeroSemana);
  }

  updateReport(Report: Report) {
    return this.http.put<Report>(this.Url + "/update", Report);
  }

  deleteReport(report: Report) {
    return this.http.request('DELETE', this.Url + "/delete", { body: report })
  }



}
