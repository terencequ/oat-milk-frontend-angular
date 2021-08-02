import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RegisterPageComponent} from './register-page.component';
import {defer, of} from 'rxjs';
import {HttpResponse} from '@angular/common/http';
import {AuthTokenResponse, UserService} from '../../../api/backend';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {ReactiveFormsModule} from '@angular/forms';
import {LogoComponent} from '../../../shared/logo/logo.component';
import {LoginPageComponent} from '../login-page/login-page.component';

describe('RegisterPageComponent', () => {
  let component: RegisterPageComponent;
  let fixture: ComponentFixture<RegisterPageComponent>;
  let routerMock: jasmine.SpyObj<Router>;
  let authServiceMock: jasmine.SpyObj<AuthService>;
  let userServiceMock: jasmine.SpyObj<UserService>;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj('Router', ['navigate']);
    authServiceMock = jasmine.createSpyObj('AuthService', ['setToken', 'clearToken']);
    userServiceMock = jasmine.createSpyObj('UserService', ['userRegisterPost']);
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [LogoComponent, RegisterPageComponent],
      providers: [
        {provide: Router, useValue: routerMock},
        {provide: AuthService, useValue: authServiceMock},
        {provide: UserService, useValue: userServiceMock}
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('register', () => {
    it('should set local storage token if user service returns token response', async () => {
      localStorage.clear();
      const expectedToken = 'test';
      userServiceMock.userRegisterPost.and.returnValue(of(new HttpResponse<AuthTokenResponse>({body: {authToken: expectedToken}})));

      const controls = component.form.controls;
      controls.displayName.setValue('testName');
      controls.email.setValue('test@gmail.com');
      controls.password.setValue('testPassword123');
      controls.confirmPassword.setValue('testPassword123');

      await component.register(new MouseEvent('click'));
      expect(authServiceMock.setToken).toHaveBeenCalled();
    });

    it('should clear local storage token if user service returns error', async () => {
      localStorage.clear();
      userServiceMock.userRegisterPost.and.returnValue(defer(() => Promise.reject(({
        status: 400,
        statusText: 'Bad Request'
      }))));

      const controls = component.form.controls;
      controls.displayName.setValue('testName');
      controls.email.setValue('test@gmail.com');
      controls.password.setValue('testPassword123');
      controls.confirmPassword.setValue('testPassword123');

      await component.register(new MouseEvent('click'));
      expect(authServiceMock.clearToken).toHaveBeenCalled();
    });
  });
});
