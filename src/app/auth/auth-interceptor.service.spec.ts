import {TestBed} from '@angular/core/testing';

import {AuthInterceptor} from './auth-interceptor.service';
import {AuthService} from './auth.service';

describe('AuthInterceptorService', () => {
  let service: AuthInterceptor;
  let mockAuthService: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    mockAuthService = jasmine.createSpyObj<AuthService>('AuthService', ['isAuthenticated']);
    TestBed.configureTestingModule({
      providers: [
        {provide: AuthService, useValue: mockAuthService}
      ]
    });
    service = TestBed.inject(AuthInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
