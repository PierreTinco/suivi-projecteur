import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor( private http : HttpClient) { }

  getStatPosteGlobal(){
    return this.http.post<any>(`${environment.apiUrl}/stat/get-stat-poste-global`,{})
  }

  getYears(){
    return this.http.post<any>(`${environment.apiUrl}/stat/get-available-years`,{})
  }

  getHistoricStatByYears(year : number){
    return this.http.post<any>(`${environment.apiUrl}/stat/get-historic-stat-by-years`,{year})

  }
}
