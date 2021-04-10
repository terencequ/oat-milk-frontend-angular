import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  routeIsInApp: boolean = false; // Determines if nav bar and footer should be rendered

  constructor(private router: Router) { }

  ngOnInit() : void {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
        let navEnd = event as NavigationEnd;
        console.log(`Navigation success for ${navEnd.urlAfterRedirects}`);
        this.routeIsInApp = !navEnd.urlAfterRedirects.startsWith("/auth"); // Nav bar and footer shouldn't show for /auth
      }
    });
  }
}
