import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

/**
 * Prevents users from accessing login and registration pages if already logged in.
 */
@Injectable({
  providedIn: 'root'
})
export class AntiAuthGuardService implements CanActivate {
  constructor(public authService: AuthService, public router: Router) {}
  async canActivate(): Promise<boolean> {
    if (await this.authService.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
      return false;
    }
    return true;
  }
}