import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoriser } from './categoriser';
import { Categories } from './categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriserService {

  private baseUrl = 'http://localhost:8080/api/v1/daiprojet/categoriser';

  constructor(private httpClient: HttpClient) { }

  getAllCategoriser(): Observable<Categoriser[]> {
    return this.httpClient.get<Categoriser[]>(`${this.baseUrl}`);
  }

  getCategoriserById(id_produit: number, id_categorie: number): Observable<Categoriser> {
    return this.httpClient.get<Categoriser>(`${this.baseUrl}/${id_produit}/${id_categorie}`);
  }

  addCategoriesToProduits(id_produit: number, categoriser: Categoriser): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/${id_produit}`, categoriser);
  }
}
