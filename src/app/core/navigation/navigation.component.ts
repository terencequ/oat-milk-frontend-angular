import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.clearToken();
    this.router.navigate(['/auth/login']);
  }
}
