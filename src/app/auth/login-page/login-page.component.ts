import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArgumentErrorResponse, UserLoginRequest, UserService } from 'src/app/api/backend';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder:FormBuilder, 
    private router: Router,
    private userService: UserService) {
      this.form = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      })
  }

  ngOnInit(): void {
  }

  async login(event: Event): Promise<void> {
    event.preventDefault();

    const value = this.form.value;
    if(value.email && value.password){
      let loginRequest: UserLoginRequest;
      loginRequest = {
        email: value.email,
        password: value.password
      }

      // Try to log in
      try {
        var response = await this.userService.userLoginPost(loginRequest, "body").toPromise();
        console.log(response);
      } catch (error){
        console.log(error.error);
      }
      
    } else {
      console.log("Invalid login.");
    }
  }
}
