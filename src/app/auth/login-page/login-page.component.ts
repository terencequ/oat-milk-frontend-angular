import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder:FormBuilder, 
    private router: Router) {
      this.form = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      })
  }

  ngOnInit(): void {
  }

  login(event: Event): void {
    event.preventDefault();
    
    const value = this.form.value;
    if(value.email && value.password){
      console.log("Valid login.");
    } else {
      console.log("Invalid login.");
    }
  }
}
