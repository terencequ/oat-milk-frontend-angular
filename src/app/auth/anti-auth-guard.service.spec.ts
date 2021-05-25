import {TestBed} from '@angular/core/testing';

import {AntiAuthGuardService} from './anti-auth-guard.service';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import {AuthGuardService} from './auth-guard.service';

describe('AntiAuthGuardService', () => {
  let authServiceMock: jasmine.SpyObj<AuthService>;
  let routerMock: jasmine.SpyObj<Router>;

  let service: AntiAuthGuardService;

  beforeEach(() => {
    authServiceMock = jasmine.createSpyObj<AuthService>('AuthService', ['isAuthenticated']);
    routerMock = jasmine.createSpyObj<Router>('Router', ['navigate', 'events']);
    TestBed.configureTestingModule({
      providers: [
        {provide: Router, useValue: routerMock},
        {provide: AuthService, useValue: authServiceMock}
      ]
    });
    service = TestBed.inject(AntiAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('CanActivate', () => {
    it('returns false if auth service is authenticated', async () => {
      authServiceMock.isAuthenticated.and.returnValue(Promise.resolve(true));
      expect(await service.canActivate()).toBeFalse();
    });

    it('navigates to "/dashboard" if auth service is authenticated', async () => {
      authServiceMock.isAuthenticated.and.returnValue(Promise.resolve(true));
      await service.canActivate();
      expect(routerMock.navigate).toHaveBeenCalledWith(['/dashboard']);
      expect(routerMock.navigate).toHaveBeenCalledTimes(1);
    });

    it('returns true if auth service is unauthenticated', async () => {
      authServiceMock.isAuthenticated.and.returnValue(Promise.resolve(false));
      expect(await service.canActivate()).toBeTrue();
    });
  });
});
