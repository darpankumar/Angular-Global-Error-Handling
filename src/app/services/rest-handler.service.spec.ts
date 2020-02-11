import { TestBed } from '@angular/core/testing';

import { RestHandlerService } from './rest-handler.service';

describe('RestHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestHandlerService = TestBed.get(RestHandlerService);
    expect(service).toBeTruthy();
  });
});
