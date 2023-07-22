import { Component, OnInit } from '@angular/core';
import { Univers } from '../univers';
import { UniversService } from '../univers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-update-univers',
  templateUrl: './update-univers.component.html',
  styleUrls: ['./update-univers.component.css']
})
export class UpdateUniversComponent implements OnInit{

  univers: Univers = new Univers();
  id: number = 0;

  constructor(private universService: UniversService, private route: ActivatedRoute, private router: Router) {}

  goToUniversList() {
    this.router.navigate(['univers']);
  }

  updateUnivers() {
    this.universService.updateUnivers(this.id, this.univers).pipe(
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
    this.updateUnivers();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.universService.getUniversById(this.id).pipe(
      tap(data => {
        console.log(data);
        this.univers = data;
      }),
      catchError(error => {
        console.log(error);
        return of(null);
      })
    ).subscribe();
  }
}
