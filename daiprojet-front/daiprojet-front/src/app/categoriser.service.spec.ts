import { TestBed } from '@angular/core/testing';

import { CategoriserService } from './categoriser.service';

describe('CategoriserService', () => {
  let service: CategoriserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
