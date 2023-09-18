import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeleteArchiveService {

  constructor(private http : HttpClient) { }

  checkDeleteArchive(){
    const lastArchiveDate = localStorage.getItem("archive_date")
    const lastArchiveDateParsed : Date = JSON.parse(lastArchiveDate)

    const archiveDate = new Date(lastArchiveDateParsed)
    const today = new Date()
    if(lastArchiveDateParsed === null || archiveDate.getMonth() !== today.getMonth()){
     
      localStorage.setItem('archive_date',JSON.stringify(today))
      const sub = this.deleteArchive().subscribe(()=>{
        sub.unsubscribe()
      })
    }
  }

  deleteArchive() : Observable<any>{
    return this.http.post(`${environment.apiUrl}/of/delete-archive`,{})
  }

}
