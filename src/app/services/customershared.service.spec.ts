import { TestBed } from '@angular/core/testing';

import { CustomersharedService } from './customershared.service';

describe('CustomersharedService', () => {
  let service: CustomersharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomersharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
