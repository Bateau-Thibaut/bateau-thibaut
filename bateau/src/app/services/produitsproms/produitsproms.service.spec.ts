import { TestBed } from '@angular/core/testing';

import { ProduitspromsService } from './produitsproms.service';

describe('ProduitspromsService', () => {
  let service: ProduitspromsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProduitspromsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
