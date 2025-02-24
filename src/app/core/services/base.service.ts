import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getOne(endPoint: string , id: string): Observable<any>{
    const url = `${this.baseUrl}/${endPoint}/${id}`;
    return this.httpClient.get(url);
  }

  getAll(endPoint: string): Observable<any>{
    const url = `${this.baseUrl}/${endPoint}`;
    return this.httpClient.get(url);
  }

  create(endPoint: string , data: any , id?: any): Observable<any>{
    const url = id != null ? `${this.baseUrl}/${endPoint}/${id}` : `${this.baseUrl}/${endPoint}`;
    return this.httpClient.post(url , data);
  }

  update(endPoint: string , data: any , id: string): Observable<any>{
    const url = `${this.baseUrl}/${endPoint}/${id}`;
    return this.httpClient.put(url , data);
  }

  delete(endPoint: string , id: string): Observable<any>{
    const url = `${this.baseUrl}/${endPoint}/${id}`;
    return this.httpClient.delete(url);
  }
}
