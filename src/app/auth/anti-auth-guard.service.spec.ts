import {TestBed} from '@angular/core/testing';

import {AntiAuthGuardService} from './anti-auth-guard.service';

describe('AntiAuthGuardService', () => {
  let service: AntiAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AntiAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
