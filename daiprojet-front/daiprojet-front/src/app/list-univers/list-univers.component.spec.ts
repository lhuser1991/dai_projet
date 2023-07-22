import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUniversComponent } from './list-univers.component';

describe('ListUniversComponent', () => {
  let component: ListUniversComponent;
  let fixture: ComponentFixture<ListUniversComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListUniversComponent]
    });
    fixture = TestBed.createComponent(ListUniversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
