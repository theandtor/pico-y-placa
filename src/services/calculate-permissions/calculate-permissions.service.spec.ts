import { TestBed } from '@angular/core/testing';

import { CalculatePermissionsService } from './calculate-permissions.service';

describe('CalculatePermissionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculatePermissionsService = TestBed.get(CalculatePermissionsService);
    expect(service).toBeTruthy();
  });
});
