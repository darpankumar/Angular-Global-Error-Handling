import { TestBed } from '@angular/core/testing';

import { TokenRefreshService } from './token-refresh.service';

describe('TokenRefreshService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TokenRefreshService = TestBed.get(TokenRefreshService);
    expect(service).toBeTruthy();
  });
});
