import { Component, OnInit } from '@angular/core';
import { Categories } from '../categories';
import { CategoriesService } from '../categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {

  categories: Categories[] = [];

  constructor(private categoriesService: CategoriesService, private router: Router) {}

  private getCategories() {
    this.categoriesService.getAllCategories().subscribe(data => {
      this.categories = data;
    })
  }

  updateCategories(id: number) {
    this.router.navigate(['update-categories', id]);
  }

  ngOnInit(): void {
      this.getCategories();
  }

}
