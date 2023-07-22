import { Component, OnInit } from '@angular/core';
import { Univers } from '../univers';
import { UniversService } from '../univers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-univers',
  templateUrl: './list-univers.component.html',
  styleUrls: ['./list-univers.component.css']
})
export class ListUniversComponent implements OnInit{

  universes: Univers[] = [];

  constructor(private universService: UniversService, private router: Router) {}

  private getUnivers() {
    this.universService.getAllUnivers().subscribe(data => {
      this.universes = data;
    })
  }

  updateUnivers(id: number) {
    this.router.navigate(['update-univers', id]);
  }

  ngOnInit(): void {
      this.getUnivers();
  }
}
