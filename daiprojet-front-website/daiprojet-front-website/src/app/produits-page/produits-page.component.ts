import { Component, OnInit } from '@angular/core';
import { Produits } from '../produits';
import { ProduitsService } from '../produits.service';
import { Router } from '@angular/router';
import { Univers } from '../univers';
import { UniversService } from '../univers.service';

@Component({
  selector: 'app-produits-page',
  templateUrl: './produits-page.component.html',
  styleUrls: ['./produits-page.component.css']
})
export class ProduitsPageComponent implements OnInit {

  produits: Produits[] = [];
  univers: Univers[] = [];

  constructor(private produitsService: ProduitsService, private universService: UniversService, private router: Router) {}

  private getProduits() {
    this.produitsService.getAllProduitsActive().subscribe(data => {
      this.produits = data;
    })
  }

  private getUnivers() {
    this.universService.getAllUnivers().subscribe(data => {
      this.univers = data;
    })
  }

  goToLicencePage(id: number) {
    this.router.navigate(['licence-page', id])
  }

  goToProduitschoisiePage(id: number) {
    this.router.navigate(['produitschoisie-page', id])
  }

  ngOnInit(): void {
      this.getProduits();
      this.getUnivers();
  }

}
