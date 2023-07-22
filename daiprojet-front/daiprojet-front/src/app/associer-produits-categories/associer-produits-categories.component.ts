import { Component, OnInit } from '@angular/core';
import { Categoriser } from '../categoriser';
import { Categories } from '../categories';
import { CategoriserService } from '../categoriser.service';
import { CategoriesService } from '../categories.service';
import { ActivatedRoute, Router } from '@angular/router';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-associer-produits-categories',
  templateUrl: './associer-produits-categories.component.html',
  styleUrls: ['./associer-produits-categories.component.css']
})
export class AssocierProduitsCategoriesComponent implements OnInit{

  categoriser: Categoriser = new Categoriser();
  categories: Categories[] = [];
  categoriesAssocier: Categories[] = [];
  id_produit: number = 0;

  constructor(private categoriserService: CategoriserService, private categoriesService: CategoriesService, private router: Router, private route: ActivatedRoute) {}

  goToProduitsList() {
    this.router.navigate(['/produits']);
  }

  getAllCategories() {
    this.categoriesService.getAllCategories().subscribe(data => {
      this.categories = data;
    })
  }

  private getCategoriesAssocies() {
    this.categoriesService.getCategoriesAssocies(this.id_produit).subscribe(data => {
      this.categoriesAssocier = data;
    })
  }

  saveCategoriser() {
    this.categoriserService.addCategoriesToProduits(this.id_produit, this.categoriser).pipe(
      tap(data => {
        console.log(data);
      }),
      catchError(error => {
        console.log(error);
        return of(null);
      })
    ).subscribe(() => {
      this.goToProduitsList();
    })
  }

  onSubmit() {
    this.saveCategoriser();
  }

  ngOnInit(): void {
    this.id_produit = this.route.snapshot.params['id'];
    this.getAllCategories();
    this.getCategoriesAssocies();
    console.log(this.categories);
  }
}
