import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginPageComponent} from './login-page.component';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService, TOKEN_KEY} from '../auth.service';
import {AuthTokenResponse, UserService} from '../../api/backend';
import {HttpResponse} from '@angular/common/http';
import {defer, of} from 'rxjs';
import {LogoComponent} from '../../shared/logo/logo.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let routerMock: jasmine.SpyObj<Router>;
  let authServiceMock: jasmine.SpyObj<AuthService>;
  let userServiceMock: jasmine.SpyObj<UserService>;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj('Router', ['navigate']);
    authServiceMock = jasmine.createSpyObj('AuthService', ['setToken', 'clearToken']);
    userServiceMock = jasmine.createSpyObj('UserService', ['userLoginPost']);
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [LogoComponent, LoginPageComponent],
      providers: [
        {provide: Router, useValue: routerMock},
        {provide: AuthService, useValue: authServiceMock},
        {provide: UserService, useValue: userServiceMock}
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('login', () => {
      it('should set local storage token if user service returns token response', async () => {
        localStorage.clear();
        const expectedToken = 'test';
        userServiceMock.userLoginPost.and.returnValue(of(new HttpResponse<AuthTokenResponse>({body: {authToken: expectedToken}})));
        component.form.controls.email.setValue('test@gmail.com');
        component.form.controls.password.setValue('testPassword123');
        await component.login(new MouseEvent('click'));
        expect(authServiceMock.setToken).toHaveBeenCalled();
      });
      it('should clear local storage token if user service returns error', async () => {
        localStorage.clear();
        userServiceMock.userLoginPost.and.returnValue(defer(() => Promise.reject(({
          status: 400,
          statusText: 'Bad Request'
        }))));
        component.form.controls.email.setValue('test@gmail.com');
        component.form.controls.password.setValue('testPassword123');
        await component.login(new MouseEvent('click'));
        expect(authServiceMock.clearToken).toHaveBeenCalled();
      });
  });
});
