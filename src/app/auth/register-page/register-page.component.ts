import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegisterRequest, UserService } from 'src/app/api/backend';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder:FormBuilder, 
    private router: Router,
    private userService: UserService) {
      this.form = this.formBuilder.group({
        email: ['', Validators.required],
        displayName: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      })
  }

  ngOnInit(): void {
  }

  async register(event: Event): Promise<void> {
    event.preventDefault();
    
    const value = this.form.value;
    if(value.email && value.displayName && value.password && value.confirmPassword){
      console.log("Valid registration details.");
      // Try to log in
      try {
        let registerRequest: UserRegisterRequest = {
          email: value.email,
          displayName: value.displayName,
          password: value.password
        }
        var response = await this.userService.userRegisterPost(registerRequest, "body").toPromise();
        console.log(response);
      } catch (error){
        console.log(error.error);
      }

    } else {
      console.log("Invalid login.");
    }
  }
}
