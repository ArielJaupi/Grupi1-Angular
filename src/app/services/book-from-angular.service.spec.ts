import { TestBed } from '@angular/core/testing';

import { BookFromAngularService } from './book-from-angular.service';

describe('BookFromAngularService', () => {
  let service: BookFromAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookFromAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
