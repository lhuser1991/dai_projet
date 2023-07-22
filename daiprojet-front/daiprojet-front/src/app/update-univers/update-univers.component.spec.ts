import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUniversComponent } from './update-univers.component';

describe('UpdateUniversComponent', () => {
  let component: UpdateUniversComponent;
  let fixture: ComponentFixture<UpdateUniversComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateUniversComponent]
    });
    fixture = TestBed.createComponent(UpdateUniversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
