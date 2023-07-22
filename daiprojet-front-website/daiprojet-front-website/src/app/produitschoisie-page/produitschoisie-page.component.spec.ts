import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitschoisiePageComponent } from './produitschoisie-page.component';

describe('ProduitschoisiePageComponent', () => {
  let component: ProduitschoisiePageComponent;
  let fixture: ComponentFixture<ProduitschoisiePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProduitschoisiePageComponent]
    });
    fixture = TestBed.createComponent(ProduitschoisiePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
