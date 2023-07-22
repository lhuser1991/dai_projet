import { Component, OnInit } from '@angular/core';
import { Produits } from '../produits';
import { Univers } from '../univers';
import { UniversService } from '../univers.service';
import { ProduitsService } from '../produits.service';
import { Router } from '@angular/router';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-add-produits',
  templateUrl: './add-produits.component.html',
  styleUrls: ['./add-produits.component.css']
})
export class AddProduitsComponent implements OnInit{
  produit: Produits = new Produits();
  universes: Univers[] = [];

  constructor(private universService: UniversService, private produitsService: ProduitsService, private router: Router) {}

  goToProduitsList() {
    this.router.navigate(['/produits']);
  }

  getAllUnivers() {
    this.universService.getAllUnivers().subscribe(data => {
      this.universes = data;
    })
  }

  saveProduits() {
    this.produitsService.addProduits(this.produit).pipe(
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
    console.log(this.produit);
    this.saveProduits();
  }

  ngOnInit(): void {
    this.getAllUnivers();
    console.log(this.universes);
  }
}
