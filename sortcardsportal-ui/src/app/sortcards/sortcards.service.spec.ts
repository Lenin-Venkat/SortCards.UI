import { TestBed } from '@angular/core/testing';

import { SortcardsService } from './sortcards.service';

describe('SortcardsService', () => {
  let service: SortcardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortcardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
