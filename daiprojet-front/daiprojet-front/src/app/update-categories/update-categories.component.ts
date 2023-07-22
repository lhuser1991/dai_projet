import { Component, OnInit } from '@angular/core';
import { Categories } from '../categories';
import { CategoriesService } from '../categories.service';
import { ActivatedRoute, Router } from '@angular/router';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-update-categories',
  templateUrl: './update-categories.component.html',
  styleUrls: ['./update-categories.component.css']
})
export class UpdateCategoriesComponent implements OnInit{

  categories: Categories = new Categories();
  id: number = 0;

  constructor(private categoriesService: CategoriesService, private route: ActivatedRoute, private router: Router) {}

  goToCategoriesList() {
    this.router.navigate(['categories']);
  }

  updateCategories() {
    this.categoriesService.updateCategories(this.id, this.categories).pipe(
      tap(data => {
        console.log(data);
      }),
      catchError(error => {
        console.log(error);
        return of(null);
      })
    ).subscribe(() => {
      this.goToCategoriesList();
    })
  }

  onSubmit() {
    this.updateCategories();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.categoriesService.getCategoriesById(this.id).pipe(
      tap(data => {
        console.log(data);
        this.categories = data;
      }),
      catchError(error => {
        console.log(error);
        return of(null);
      })
    ).subscribe();
  }
}
