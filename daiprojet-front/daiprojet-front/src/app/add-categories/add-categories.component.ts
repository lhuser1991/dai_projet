import { Component, OnInit } from '@angular/core';
import { Categories } from '../categories';
import { CategoriesService } from '../categories.service';
import { Router } from '@angular/router';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent implements OnInit {

  categories: Categories = new Categories();

  constructor(private categoriesService: CategoriesService, private router: Router) {}

  goToCategoriesList() {
    this.router.navigate(['/categories']);
  }

  saveCategories() {
    this.categoriesService.addCategories(this.categories).pipe(
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
    this.saveCategories();
  }

  ngOnInit(): void {
      
  }  

}
