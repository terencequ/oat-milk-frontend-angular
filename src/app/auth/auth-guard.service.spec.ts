import {inject, TestBed} from '@angular/core/testing';

import {AuthGuardService} from './auth-guard.service';
import {UserService} from '../api/backend';
import {CharacterSheetPageComponent} from '../character-sheet/character-sheet-page/character-sheet-page.component';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import createSpyObj = jasmine.createSpyObj;

describe('AuthGuardService', () => {
  let authServiceMock: jasmine.SpyObj<AuthService>;
  let routerMock: jasmine.SpyObj<Router>;

  let service: AuthGuardService;

  beforeEach(() => {
    authServiceMock = jasmine.createSpyObj<AuthService>('AuthService', ['isAuthenticated']);
    routerMock = jasmine.createSpyObj<Router>('Router', ['navigate']);
    TestBed.configureTestingModule({
      providers: [
        Router, {provide: Router, useValue: routerMock},
        AuthService, {provide: AuthService, useValue: authServiceMock}
      ]
    });
    service = TestBed.inject(AuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('CanActivate', () => {
    it('returns true if auth service is authenticated', async () => {
      authServiceMock.isAuthenticated.and.returnValue(Promise.resolve(true));
      expect(await service.canActivate()).toBeTrue();
    });

    it('navigates to "/auth/login" if auth service is unauthenticated', async () => {
      authServiceMock.isAuthenticated.and.returnValue(Promise.resolve(false));
      routerMock.navigate.and.returnValue(Promise.resolve(true));
      await service.canActivate();
      expect(routerMock.navigate).toHaveBeenCalledWith(['/auth/login']);
      expect(routerMock.navigate).toHaveBeenCalledTimes(1);
    });

    it('returns false if auth service is unauthenticated', async () => {
      authServiceMock.isAuthenticated.and.returnValue(Promise.resolve(false));
      expect(await service.canActivate()).toBeFalse();
    });
  });
});
