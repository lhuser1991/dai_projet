import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssocierProduitsCategoriesComponent } from './associer-produits-categories.component';

describe('AssocierProduitsCategoriesComponent', () => {
  let component: AssocierProduitsCategoriesComponent;
  let fixture: ComponentFixture<AssocierProduitsCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssocierProduitsCategoriesComponent]
    });
    fixture = TestBed.createComponent(AssocierProduitsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
