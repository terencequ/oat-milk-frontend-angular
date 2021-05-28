import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TopNavigationBarComponent} from './top-navigation-bar.component';
import {AuthService} from '../../../auth/auth.service';
import {Router} from '@angular/router';
import {of} from 'rxjs';
import {HamburgerNavigationBarComponent} from '../hamburger-navigation-bar/hamburger-navigation-bar.component';

describe('TopNavigationBarComponent', () => {
  let component: TopNavigationBarComponent;
  let fixture: ComponentFixture<TopNavigationBarComponent>;
  let authServiceMock: jasmine.SpyObj<AuthService>;
  let routerMock: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj<Router>('Router', ['navigate'], {events: of()});
    authServiceMock = jasmine.createSpyObj<AuthService>('AuthService', ['isAuthenticated']);
    await TestBed.configureTestingModule({
      declarations: [TopNavigationBarComponent],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: AuthService, useValue: authServiceMock }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
