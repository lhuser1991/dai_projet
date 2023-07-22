import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Univers } from './univers';

@Injectable({
  providedIn: 'root'
})
export class UniversService {

  private baseUrl = 'http://localhost:8080/api/v1/daiprojet/univers';

  constructor(private httpClient: HttpClient) { }

  getAllUnivers(): Observable<Univers[]> {
    return this.httpClient.get<Univers[]>(`${this.baseUrl}`);
  }

  getUniversById(id: number): Observable<Univers> {
    return this.httpClient.get<Univers>(`${this.baseUrl}/${id}`);
  }
}
