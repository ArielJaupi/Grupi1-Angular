import { TestBed } from '@angular/core/testing';

import { GreenCarsService } from './green-cars.service';

describe('GreenCarsService', () => {
  let service: GreenCarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GreenCarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
