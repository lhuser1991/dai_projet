import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProduitsComponent } from './update-produits.component';

describe('UpdateProduitsComponent', () => {
  let component: UpdateProduitsComponent;
  let fixture: ComponentFixture<UpdateProduitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateProduitsComponent]
    });
    fixture = TestBed.createComponent(UpdateProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
