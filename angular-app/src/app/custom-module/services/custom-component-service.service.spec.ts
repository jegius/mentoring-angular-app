import { TestBed } from '@angular/core/testing';

import { CustomComponentServiceService } from './custom-component-service.service';

describe('CustomComponentServiceService', () => {
  let service: CustomComponentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomComponentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
