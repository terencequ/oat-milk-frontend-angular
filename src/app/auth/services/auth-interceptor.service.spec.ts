import {TestBed} from '@angular/core/testing';

import {AuthInterceptor} from './auth-interceptor.service';
import {AuthService} from './auth.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('AuthInterceptorService', () => {
  let service: AuthInterceptor;
  let mockAuthService: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    mockAuthService = jasmine.createSpyObj<AuthService>('AuthService', ['isAuthenticated']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthInterceptor,
        {provide: AuthService, useValue: mockAuthService},
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true
        }
      ]
    });
    service = TestBed.inject(AuthInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
