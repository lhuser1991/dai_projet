import { Component, OnInit } from '@angular/core';
import { Produits } from '../produits';
import { ProduitsService } from '../produits.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css']
})
export class ListProduitsComponent implements OnInit{

  produits: Produits[] = [];

  constructor(private produitsService: ProduitsService, private router: Router) {}

  private getProduits() {
    this.produitsService.getAllProduits().subscribe(data => {
      this.produits = data;
    })
  }

  updateProduits(id: number) {
    this.router.navigate(['update-produits', id]);
  }

  detailsProduits(id: number) {
    this.router.navigate(['details-produits', id]);
  }

  associerCategorie(id: number) {
    this.router.navigate(['associer-produits-categories', id]);
  }

  ngOnInit(): void {
      this.getProduits();
  }

}
