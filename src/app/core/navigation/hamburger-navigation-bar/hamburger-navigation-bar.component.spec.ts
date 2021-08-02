import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HamburgerNavigationBarComponent} from './hamburger-navigation-bar.component';
import {AuthService} from '../../../auth/services/auth.service';
import {Router} from '@angular/router';
import {of} from 'rxjs';

describe('HamburgerNavigationBarComponent', () => {
  let component: HamburgerNavigationBarComponent;
  let fixture: ComponentFixture<HamburgerNavigationBarComponent>;
  let authServiceMock: jasmine.SpyObj<AuthService>;
  let routerMock: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    routerMock = jasmine.createSpyObj<Router>('Router', ['navigate'], {events: of()});
    authServiceMock = jasmine.createSpyObj<AuthService>('AuthService', ['isAuthenticated']);
    await TestBed.configureTestingModule({
      declarations: [HamburgerNavigationBarComponent],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: AuthService, useValue: authServiceMock }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HamburgerNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
