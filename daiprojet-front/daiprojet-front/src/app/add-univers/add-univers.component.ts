import { Component, OnInit } from '@angular/core';
import { Univers } from '../univers';
import { UniversService } from '../univers.service';
import { Router } from '@angular/router';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-add-univers',
  templateUrl: './add-univers.component.html',
  styleUrls: ['./add-univers.component.css']
})
export class AddUniversComponent implements OnInit{

  univers: Univers = new Univers();

  constructor(private universService: UniversService, private router: Router) {}

  goToUniversList() {
    this.router.navigate(['/univers']);
  }

  saveUnivers() {
    this.universService.addUnivers(this.univers).pipe(
      tap(data => {
        console.log(data);
      }),
      catchError(error => {
        console.log(error);
        return of(null);
      })
    ).subscribe(() => {
      this.goToUniversList();
    })
  }

  onSubmit() {
    this.saveUnivers();
  }

  ngOnInit(): void {
      
  }
}
