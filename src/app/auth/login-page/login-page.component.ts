import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginRequest, UserService } from 'src/app/api/backend';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup;
  errors: any = {
    email: "",
    password: "",
    overall: ""
  }

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private authService: AuthService) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  /**
   * Validate the login form, and set the error messages.
   * @returns True if form is valid, False otherwise.
   */
  validateForm() {
    this.errors = {
      email: "",
      password: "",
      overall: ""
    };

    // Email
    var email = this.form.get("email");
    if (email?.getError("required")) {
      this.errors["email"] = "Email is required.";
    } else if (email?.getError("email")){
      this.errors['email'] = "Email must be valid."
    }

    // Password
    var password = this.form.get("password");
    if (password?.getError("required")) {
      this.errors["password"] = "Password is required.";
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
      }

      // Try to log in
      try {
        var response = await this.userService.userLoginPost(loginRequest, "body").toPromise();
        this.authService.setToken(response.authToken ?? "");
      } catch (error) {
        this.errors["overall"] = error.error.message;
        this.authService.clearToken();
      }
    }
  }
}
