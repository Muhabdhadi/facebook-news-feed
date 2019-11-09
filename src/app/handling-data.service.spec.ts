import { TestBed } from '@angular/core/testing';

import { HandlingDataService } from './handling-data.service';

describe('HandlingDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HandlingDataService = TestBed.get(HandlingDataService);
    expect(service).toBeTruthy();
  });
});
