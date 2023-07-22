import { Component, OnInit } from '@angular/core';
import { Univers } from '../univers';
import { ActivatedRoute, Router } from '@angular/router';
import { Produits } from '../produits';
import { ProduitsService } from '../produits.service';
import { UniversService } from '../univers.service';

@Component({
  selector: 'app-licence-page',
  templateUrl: './licence-page.component.html',
  styleUrls: ['./licence-page.component.css']
})
export class LicencePageComponent implements OnInit{
  produits: Produits[] = [];
  univers: Univers = new Univers();
  id: number = 0;

  private getUnivers(id: number) {
    this.universService.getUniversById(id).subscribe(data => {
      this.univers = data;
    })
  }

  goToProduitschoisiePage(id: number) {
    this.router.navigate(['produitschoisie-page', id])
  }
  
  constructor(private produitsService: ProduitsService, private universService: UniversService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.produits = [];
      this.getUnivers(this.id);
      this.produitsService.getAllProduitsByLicence(this.id).subscribe(data => {
        this.produits = data;
      })
  }
}
