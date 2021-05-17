import {Component, Input, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Oat Milk';
  routeIsInApp = false; // Determines if nav bar and footer should be rendered

  constructor(private router: Router,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.router.events.subscribe(async (event) => {
      if (event instanceof NavigationEnd) {
        const navEnd = event as NavigationEnd;

        // Update routeIsInApp state
        console.log(`Navigation success for ${navEnd.urlAfterRedirects}`);
        this.routeIsInApp = this.doesRouteRequireAuth(navEnd.urlAfterRedirects); // Nav bar and footer shouldn't show for /auth

        // Update authentication state
        const authenticated = await this.authService.isAuthenticated();
        console.log('Authenticated? ' + authenticated);
        console.log('Route requires auth? ' + this.doesRouteRequireAuth(navEnd.urlAfterRedirects));
        if (authenticated && !this.doesRouteRequireAuth(navEnd.urlAfterRedirects)) {
          await this.router.navigate(['/dashboard']);
        } else if (!authenticated && this.doesRouteRequireAuth(navEnd.urlAfterRedirects)) {
          await this.router.navigate(['/login']);
        }
      }
    });
  }

  doesRouteRequireAuth(url: string): boolean {
    return url !== '/auth/login' && url !== '/auth/register';
  }
}
