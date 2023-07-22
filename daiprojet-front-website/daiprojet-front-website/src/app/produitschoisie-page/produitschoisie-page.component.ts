import { Component, OnInit } from '@angular/core';
import { Produits } from '../produits';
import { Categories } from '../categories';
import { ProduitsService } from '../produits.service';
import { CategoriesService } from '../categories.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produitschoisie-page',
  templateUrl: './produitschoisie-page.component.html',
  styleUrls: ['./produitschoisie-page.component.css']
})
export class ProduitschoisiePageComponent implements OnInit{
  produit: Produits = new Produits();
  categories: Categories[] = [];
  id: number = 0;

  constructor(private produitsService: ProduitsService, private categoriesService: CategoriesService, private route: ActivatedRoute) {}

  private getCategoriesAssocies() {
    this.categoriesService.getCategoriesAssocies(this.id).subscribe(data => {
      this.categories = data;
    })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.produit = new Produits();
    this.getCategoriesAssocies();
    this.produitsService.geProduitsById(this.id).subscribe(data => {
      this.produit = data;
    })
}

}
