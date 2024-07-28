import { TestBed } from '@angular/core/testing';

import { IsbnserviceService } from './isbnservice.service';

describe('IsbnserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IsbnserviceService = TestBed.get(IsbnserviceService);
    expect(service).toBeTruthy();
  });
});
