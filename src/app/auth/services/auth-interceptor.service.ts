import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<object>, next: HttpHandler): Observable<HttpEvent<object>> {
    // Get the auth token from the service.
    const authToken = this.authService.getToken();

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    let authReq = req;
    if (authToken) {
      authReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + authToken)
      });
    }

    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}
