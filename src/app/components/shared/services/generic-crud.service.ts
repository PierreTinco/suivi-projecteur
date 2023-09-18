import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { allEntities } from 'src/app/models/entities/all-entities.model';
import { FindBy } from 'src/app/models/findByMethod.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenericCrudService {

 
  constructor(private http : HttpClient) { }
  /**
   * 
   * @param data 
   * @param entity => to target the good entity 
   * @returns allEntities[]
   */
  findBy(data : FindBy,entity : string){
    return this.http.post<allEntities[]>(`${environment.apiUrl}/${entity}/findBy`,data)
  }

  save(data : allEntities | allEntities[],entity : string){
    return this.http.post<allEntities | allEntities[]>(`${environment.apiUrl}/${entity}/save`,data)
  }

  delete(id : number | number[],entity : string){
    return this.http.post<void>(`${environment.apiUrl}/${entity}/delete`,{id : id})
  }
}
