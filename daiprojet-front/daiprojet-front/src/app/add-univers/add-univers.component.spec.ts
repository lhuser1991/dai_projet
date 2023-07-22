import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUniversComponent } from './add-univers.component';

describe('AddUniversComponent', () => {
  let component: AddUniversComponent;
  let fixture: ComponentFixture<AddUniversComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUniversComponent]
    });
    fixture = TestBed.createComponent(AddUniversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
