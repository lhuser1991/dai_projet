import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from './categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private baseUrl = 'http://localhost:8080/api/v1/daiprojet/categories';
  private urlA = 'http://localhost:8080/api/v1/daiprojet/categories-associes';

  constructor(private httpClient: HttpClient) { }

  getAllCategories(): Observable<Categories[]> {
    return this.httpClient.get<Categories[]>(`${this.baseUrl}`);
  }

  getCategoriesById(id: number): Observable<Categories> {
    return this.httpClient.get<Categories>(`${this.baseUrl}/${id}`);
  }

  getCategoriesAssocies(id: number): Observable<Categories[]> {
    return this.httpClient.get<Categories[]>(`${this.urlA}/${id}`);
  }
}
