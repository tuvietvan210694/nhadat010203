import { TestBed } from '@angular/core/testing';

import { CustomerbrokerService } from './customerbroker.service';

describe('CustomerbrokerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerbrokerService = TestBed.get(CustomerbrokerService);
    expect(service).toBeTruthy();
  });
});
