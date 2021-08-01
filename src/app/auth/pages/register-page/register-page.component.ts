import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ErrorResponse, UserRequest, UserService} from 'src/app/api/backend';
import {AuthService} from '../../services/auth.service';

interface RegisterFormErrors {
  email: string;
  displayName: string;
  password: string;
  confirmPassword: string;
  overall: string;
}

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  form: FormGroup;
  errors: RegisterFormErrors = {
    email: '',
    displayName: '',
    password: '',
    confirmPassword: '',
    overall: ''
  };

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userService: UserService,
              private authService: AuthService) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      displayName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.pattern(new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/))]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {

  }

  /**
   * Validate the register form, and set the error messages.
   * @returns True if form is valid, False otherwise.
   */
  validateForm(): boolean{
    this.errors = {
      email: '',
      displayName: '',
      password: '',
      confirmPassword: '',
      overall: ''
    };

    // Email
    const email = this.form.get('email');
    if (email?.getError('required')) {
      this.errors.email = 'Email is required.';
    } else if (email?.getError('email')) {
      this.errors.email = 'Email must be valid.';
    }

    // Display Name
    const displayName = this.form.get('displayName');
    if (displayName?.getError('required')) {
      this.errors.displayName = 'Display name is required.';
    } else if (displayName?.getError('minLength') || displayName?.getError('maxLength')) {
      this.errors.displayName = 'Display name must be between 4 and 20 characters inclusive.';
    }

    // Password
    const password = this.form.get('password');
    if (password?.getError('required')) {
      this.errors.password = 'Password is required.';
    } else if (password?.getError('pattern')) {
      this.errors.password = 'Password must have one letter, one number and be between 8 and 20 characters inclusive.';
    }

    // Confirm password
    const confirmPassword = this.form.get('confirmPassword');
    if (confirmPassword?.getError('required')) {
      this.errors.confirmPassword = 'Password confirmation is required.';
    } else if (confirmPassword?.value !== password?.value) {
      this.errors.confirmPassword = 'The passwords do not match.';
    }

    return this.form.valid && confirmPassword?.value === password?.value;
  }

  async register(event: Event): Promise<void> {
    event.preventDefault();
    const formValid = this.validateForm();

    if (formValid) {
      const value = this.form.value;
      // Try to register
      try {
        const registerRequest: UserRequest = {
          email: value.email,
          displayName: value.displayName,
          password: value.password
        };
        const response = await this.userService.userRegisterPost(registerRequest, 'response').toPromise();
        this.authService.setToken(response.body?.authToken ?? '');
        await this.router.navigate(['/dashboard']);
      } catch (error) {
        const errorResponse = error.error as ErrorResponse;
        if (error.status === 0){
          this.errors.overall = 'Services are down, please try again later.';
        } else {
          this.errors.overall = errorResponse?.message ?? 'An unexpected error has occurred.';
          this.authService.clearToken();
        }
      }
    }
  }
}
