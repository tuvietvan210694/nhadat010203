import { TestBed } from '@angular/core/testing';

import { PostbrokerService } from './postbroker.service';

describe('PostbrokerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostbrokerService = TestBed.get(PostbrokerService);
    expect(service).toBeTruthy();
  });
});
