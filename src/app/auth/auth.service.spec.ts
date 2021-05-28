import {TestBed} from '@angular/core/testing';

import {AuthService, TOKEN_KEY} from './auth.service';
import {UserResponse, UserService} from '../api/backend';
import {defer, of} from 'rxjs';
import {HttpErrorResponse, HttpEvent, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';

export function asyncError<T>(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}

describe('AuthService', () => {
  let service: AuthService;
  let userServiceMock: jasmine.SpyObj<UserService>;

  beforeEach(() => {
    userServiceMock = jasmine.createSpyObj<UserService>('UserService', ['userProfileGet']);
    TestBed.configureTestingModule({
      providers: [
        {provide: UserService, useValue: userServiceMock}
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('isAuthenticated', () => {
    it('should return true if userProfileGet returns a non-error response', async () => {
      userServiceMock.userProfileGet.and
        .returnValue(of(new HttpResponse({
          status: 200,
        }) as HttpEvent<UserResponse>));
      expect(await service.isAuthenticated()).toBeTrue();
    });

    it('should return false if userProfileGet returns an error response', async () => {
      userServiceMock.userProfileGet.and
        .returnValue(defer(() => Promise.reject(({
          status: 400,
          statusText: 'Bad Request'
        }))));
      expect(await service.isAuthenticated()).toBeFalse();
    });
  });


  describe('setToken', () => {
    it('should set a value in local storage for TOKEN_KEY', () => {
      const expectedToken = 'test';
      localStorage.clear();
      service.setToken(expectedToken);
      expect(localStorage.getItem(TOKEN_KEY)).toBe(expectedToken);
    });
  });

  describe('getToken', () => {
    it('should return the value from local storage for TOKEN_KEY if one exists', () => {
      const expectedToken = 'test2';
      localStorage.clear();
      localStorage.setItem(TOKEN_KEY, expectedToken);
      expect(service.getToken()).toBe(expectedToken);
    });

    it('should return empty string from local storage for TOKEN_KEY if no token is set', () => {
      const expectedToken = '';
      localStorage.clear();
      expect(service.getToken()).toBe(expectedToken);
    });
  });

  describe('clearToken', () => {
    it('should clear TOKEN_KEY value from local storage', () => {
      const expectedToken = 'test2';
      localStorage.clear();
      localStorage.setItem(TOKEN_KEY, expectedToken);
      service.clearToken();
      expect(localStorage.getItem(TOKEN_KEY)).toBe('');
    });
  });
});
