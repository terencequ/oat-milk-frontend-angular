import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {ErrorResponse, UserLoginRequest, UserService} from '../../api/backend';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup;
  errors = {
    email: '',
    password: '',
    overall: ''
  };

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userService: UserService,
              private authService: AuthService) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  /**
   * Validate the login form, and set the error messages.
   * @returns True if form is valid, False otherwise.
   */
  validateForm(): boolean {
    this.errors = {
      email: '',
      password: '',
      overall: ''
    };

    // Email
    const email = this.form.get('email');
    if (email?.getError('required')) {
      this.errors.email = 'Email is required.';
    } else if (email?.getError('email')) {
      this.errors.email = 'Email must be valid.';
    }

    // Password
    const password = this.form.get('password');
    if (password?.getError('required')) {
      this.errors.password = 'Password is required.';
    }

    return this.form.valid;
  }

  async login(event: Event): Promise<void> {
    event.preventDefault();
    const formValid = this.validateForm();

    const value = this.form.value;
    if (formValid) {
      let loginRequest: UserLoginRequest;
      loginRequest = {
        email: value.email,
        password: value.password
      };

      // Try to log in
      try {
        const response = await this.userService.userLoginPost(loginRequest, 'response').toPromise();
        this.authService.setToken(response.body?.authToken ?? '');
        await this.router.navigate(['/dashboard']);
      } catch (error) {
        const errorResponse = error.error as ErrorResponse;
        this.errors.overall = errorResponse?.message ?? 'An unexpected error has occurred.';
        this.authService.clearToken();
      }
    }
  }
}
