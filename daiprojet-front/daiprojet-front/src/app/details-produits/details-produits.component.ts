import { Component, OnInit } from '@angular/core';
import { Produits } from '../produits';
import { ProduitsService } from '../produits.service';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../categories.service';
import { Categories } from '../categories';

@Component({
  selector: 'app-details-produits',
  templateUrl: './details-produits.component.html',
  styleUrls: ['./details-produits.component.css']
})
export class DetailsProduitsComponent implements OnInit{
  produit: Produits = new Produits();
  categories: Categories[] = [];
  id: number = 0;

  private getCategoriesAssocies() {
    this.categoriesService.getCategoriesAssocies(this.id).subscribe(data => {
      this.categories = data;
    })
  }

  constructor(private produitsService: ProduitsService, private categoriesService: CategoriesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.produit = new Produits();
      this.getCategoriesAssocies();
      this.produitsService.geProduitsById(this.id).subscribe(data => {
        this.produit = data;
      })
  }
}
