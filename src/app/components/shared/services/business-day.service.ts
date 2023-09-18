import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export type count_day = {
  nb : number;
}


@Injectable({
  providedIn: 'root'
})
export class BusinessDayService {

  constructor(private http: HttpClient) { }

  findNextBusinessDay() {
   return this.http.post(`${environment.apiUrl}/next_business_day`,{})
  }

  countBusinessDayByMonth(){
    return this.http.post<count_day>(`${environment.apiUrl}/count_business_day`,{})
  }

}
