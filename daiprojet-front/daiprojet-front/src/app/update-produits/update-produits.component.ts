import { Component } from '@angular/core';
import { Produits } from '../produits';
import { Univers } from '../univers';
import { ProduitsService } from '../produits.service';
import { UniversService } from '../univers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-update-produits',
  templateUrl: './update-produits.component.html',
  styleUrls: ['./update-produits.component.css']
})
export class UpdateProduitsComponent {
  produit: Produits = new Produits();
  id: number = 0;
  universes: Univers[] = [];

  constructor(private produitsService: ProduitsService, private universService: UniversService, private route: ActivatedRoute, private router: Router) {}

  goToProduitsList() {
    this.router.navigate(['/produits']);
  }

  getAllUnivers() {
    this.universService.getAllUnivers().subscribe(data => {
      this.universes = data;
    })
  }

  updateProduits() {
    this.produitsService.updateProduits(this.id, this.produit).pipe(
      tap(data => {
        console.log(data);
      }),
      catchError(error => {
        console.log(error);
        return of(null);
      })
    ).subscribe(() => {
      this.goToProduitsList();
    });
  }

  onSubmit() {
    this.updateProduits();
  }

  ngOnInit(): void {
    this.getAllUnivers();
    this.id = this.route.snapshot.params['id'];
    this.produitsService.geProduitsById(this.id).pipe(
      tap(data => {
        console.log(data);
        this.produit = data;
      }),
      catchError(error => {
        console.log(error);
        return of(null);
      })
    ).subscribe();
  }
}
