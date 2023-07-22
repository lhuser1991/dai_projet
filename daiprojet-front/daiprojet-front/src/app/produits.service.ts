import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produits } from './produits';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  private baseUrl = 'http://localhost:8080/api/v1/daiprojet/produits';

  constructor(private httpClient: HttpClient) { }

  getAllProduits(): Observable<Produits[]> {
    return this.httpClient.get<Produits[]>(`${this.baseUrl}`);
  }

  geProduitsById(id: number): Observable<Produits> {
    return this.httpClient.get<Produits>(`${this.baseUrl}/${id}`);
  }

  addProduits(produits: Produits): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`,produits);
  }

  updateProduits(id: number, produits: Produits): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, produits);
  }
}
