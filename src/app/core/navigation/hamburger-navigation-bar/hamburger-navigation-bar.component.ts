import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/auth/auth.service';

@Component({
  selector: 'app-hamburger-navigation-bar',
  templateUrl: './hamburger-navigation-bar.component.html',
  styleUrls: ['./hamburger-navigation-bar.component.scss']
})
export class HamburgerNavigationBarComponent implements OnInit {

  isExpanded = false;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  /**
   * Toggle the expansion of the navigation menu.
   * @returns The toggled result.
   */
  toggleExpanded(): boolean {
    this.isExpanded = !this.isExpanded;
    return this.isExpanded;
  }

  /**
   * Logs out the user. Clears the token and navigates to login screen.
   */
  logout() {
    this.authService.clearToken();
    this.router.navigate(['/auth/login']);
  }
}
