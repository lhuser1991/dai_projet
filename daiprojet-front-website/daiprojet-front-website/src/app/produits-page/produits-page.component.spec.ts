import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsPageComponent } from './produits-page.component';

describe('ProduitsPageComponent', () => {
  let component: ProduitsPageComponent;
  let fixture: ComponentFixture<ProduitsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProduitsPageComponent]
    });
    fixture = TestBed.createComponent(ProduitsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
