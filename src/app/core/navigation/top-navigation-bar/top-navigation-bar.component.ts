import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-top-navigation-bar',
  templateUrl: './top-navigation-bar.component.html',
  styleUrls: ['./top-navigation-bar.component.scss']
})
export class TopNavigationBarComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  /**
   * Logs out the user. Clears the token and navigates to login screen.
   */
  async logout(): Promise<void> {
    this.authService.clearToken();
    await this.router.navigate(['/auth/login']);
  }
}
