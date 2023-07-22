import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produits } from './produits';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  private baseUrl = 'http://localhost:8080/api/v1/daiprojet/produits';
  private urlA = 'http://localhost:8080/api/v1/daiprojet/produits-active';

  constructor(private httpClient: HttpClient) { }

  getAllProduits(): Observable<Produits[]> {
    return this.httpClient.get<Produits[]>(`${this.baseUrl}`);
  }

  getAllProduitsActive(): Observable<Produits[]> {
    return this.httpClient.get<Produits[]>(`${this.urlA}`);
  }

  getAllProduitsByLicence(id: number): Observable<Produits[]> {
    return this.httpClient.get<Produits[]>(`${this.urlA}/${id}`);
  }

  geProduitsById(id: number): Observable<Produits> {
    return this.httpClient.get<Produits>(`${this.baseUrl}/${id}`);
  }
}
