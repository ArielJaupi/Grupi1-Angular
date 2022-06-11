import { TestBed } from '@angular/core/testing';

import { OfferCarsService } from './offer-cars.service';

describe('OfferCarsService', () => {
  let service: OfferCarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfferCarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
