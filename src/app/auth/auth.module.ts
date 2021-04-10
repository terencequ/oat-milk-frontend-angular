import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ApiModule } from '../api/backend/api.module';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [LoginPageComponent, RegisterPageComponent],
  imports: [
    CommonModule, 
    AuthRoutingModule, 
    ReactiveFormsModule, 
    SharedModule, 
    ApiModule.forRoot({rootUrl: environment.backendUrl})
  ]
})
export class AuthModule { }
