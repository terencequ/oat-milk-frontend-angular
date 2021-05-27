import {Injectable} from '@angular/core';
import {UserService} from '../api/backend';

export const TOKEN_KEY = 'auth-token';

/**
 * Handles and manipulates auth JWT in local storage.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService: UserService) {
  }

  /**
   * Checks with the backend if this user is still authenticated.
   * @returns True if authenticated, False if not.
   */
  public async isAuthenticated(): Promise<boolean> {
    try {
      await this.userService.userProfileGet('body').toPromise();
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * Sets the JWT token used to authenticate with the backend.
   * @param token JWT token
   */
  public setToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
  }

  /**
   * Gets the JWT token used to authenticate with the backend.
   * @param token JWT token
   */
  public getToken(): string {
    return localStorage.getItem(TOKEN_KEY) ?? '';
  }

  /**
   * This will remove the user's ability to authenticate.
   */
  public clearToken(): void {
    localStorage.setItem(TOKEN_KEY, '');
  }
}
