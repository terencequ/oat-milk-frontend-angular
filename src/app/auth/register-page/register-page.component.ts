import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder:FormBuilder, 
    private router: Router) {
      this.form = this.formBuilder.group({
        email: ['', Validators.required],
        displayName: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      })
  }

  ngOnInit(): void {
  }

  register(event: Event): void {
    event.preventDefault();
    
    const value = this.form.value;
    if(value.email && value.password){
      console.log("Valid login.");
    } else {
      console.log("Invalid login.");
    }
  }
}
