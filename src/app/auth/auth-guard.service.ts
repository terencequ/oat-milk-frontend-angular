import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

/**
 * Prevents users from accessing application pages without being logged in.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(public authService: AuthService, public router: Router) {}
  async canActivate(): Promise<boolean> {
    if (!(await this.authService.isAuthenticated())) {
      this.router.navigate(['/auth/login']);
      return false;
    }
    return true;
  }
}